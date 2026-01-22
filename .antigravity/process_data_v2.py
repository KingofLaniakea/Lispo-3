
import pandas as pd
import os
import shutil
import re
import json

def natural_sort_key(s):
    return [int(text) if text.isdigit() else text.lower()
            for text in re.split('([0-9]+)', s)]

def get_category(name):
    name = name.lower()
    if 'decoy' in name: return 'Decoys'
    if 'bag' in name or 'pack' in name: return 'Bags & Storage'
    if 'blind' in name or 'suit' in name or 'ghillie' in name: return 'Blinds & Camo'
    if 'stand' in name: return 'Tree Stands'
    if 'camping' in name or 'canteen' in name: return 'Camping'
    if 'fishing' in name: return 'Fishing'
    if 'knife' in name or 'knives' in name or 'tool' in name or 'tongs' in name: return 'Tools'
    return 'Accessories'

try:
    # 1. Read Excel
    df = pd.read_excel(r'E:\Company\网站大类名+照片.xlsx')
    col_name = df.columns[2]
    items = df[col_name].dropna().tolist()

    # 2. List Images
    src_dir = r'E:\Company'
    files = os.listdir(src_dir)
    images = [f for f in files if f.startswith('图片') and f.lower().endswith(('.jpg', '.png', '.jpeg'))]
    images.sort(key=natural_sort_key)
    
    # 4. Prepare Target Directory
    dst_dir = r'E:\Company\company_gemini\public\images'
    os.makedirs(dst_dir, exist_ok=True)
    
    # 5. Generate Products List
    products = []
    
    for idx, (item_name, img_file) in enumerate(zip(items, images)):
        src_img_path = os.path.join(src_dir, img_file)
        dst_img_name = f"product_{idx+1}{os.path.splitext(img_file)[1]}"
        dst_img_path = os.path.join(dst_dir, dst_img_name)
        
        shutil.copy2(src_img_path, dst_img_path)
        
        cat = get_category(item_name)
        
        products.append({
            "id": idx + 1,
            "name": item_name.strip(),
            "category": cat,
            "image": f"/images/{dst_img_name}",
            "description": f"Professional grade {item_name} designed for durability and performance in the field.",
            "features": ["Waterproof Materials", "Easy Deployment", "Industry Standard"]
        })

    # 6. Write JS file
    js_content = "export const products = " + json.dumps(products, indent=2) + ";"
    js_content += "\n\nexport const companyInfo = {\n"
    js_content += '    name: "Hangzhou Lispo Sports Co., Ltd.",\n'
    js_content += '    tagline: "Professional Outdoor & Hunting Gear",\n'
    js_content += '    description: "Specializing in high-quality decoys, hunting bags, and outdoor accessories. Delivering excellence from Hangzhou to the world.",\n'
    js_content += '    contact: {\n'
    js_content += '        email: "tpmam2026@gmail.com",\n'
    js_content += '        phone: "+86 13705811629",\n'
    js_content += '        address: "Hangzhou, Zhejiang, China"\n'
    js_content += '    }\n'
    js_content += '};\n'
    
    with open(r'E:\Company\company_gemini\src\data\products.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print("Updated products.js with smart categories.")

except Exception as e:
    print(f"Error: {e}")
