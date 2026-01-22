
import pandas as pd
import os
import shutil
import re
import json

def natural_sort_key(s):
    return [int(text) if text.isdigit() else text.lower()
            for text in re.split('([0-9]+)', s)]

try:
    # 1. Read Excel
    df = pd.read_excel(r'E:\Company\网站大类名+照片.xlsx')
    # Get items from col 2 (index 2)
    col_name = df.columns[2] # 'Unnamed: 2'
    items = df[col_name].dropna().tolist()
    print(f"Found {len(items)} items in Excel.")

    # 2. List Images
    src_dir = r'E:\Company'
    files = os.listdir(src_dir)
    images = [f for f in files if f.startswith('图片') and f.lower().endswith(('.jpg', '.png', '.jpeg'))]
    images.sort(key=natural_sort_key)
    print(f"Found {len(images)} images in {src_dir}.")
    
    # 3. Validation
    if len(items) != len(images):
        print("WARNING: Count mismatch!")
        # We will zip as far as we can
    
    # 4. Prepare Target Directory
    dst_dir = r'E:\Company\company_gemini\public\images'
    os.makedirs(dst_dir, exist_ok=True)
    
    # 5. Generate Products List
    products = []
    
    # Print mapping for verification
    print("\nMapping:")
    for idx, (item_name, img_file) in enumerate(zip(items, images)):
        # Copy image
        src_img_path = os.path.join(src_dir, img_file)
        dst_img_name = f"product_{idx+1}{os.path.splitext(img_file)[1]}"
        dst_img_path = os.path.join(dst_dir, dst_img_name)
        
        shutil.copy2(src_img_path, dst_img_path)
        
        # Determine category (just use item name or a generic one if not clear)
        # These look like categories themselves.
        # We'll treat them as "products" for the purpose of the site structure requested (Product List -> Detail)
        
        products.append({
            "id": idx + 1,
            "name": item_name.strip(),
            "category": "Outdoor & Hunting", # Default category since they look like hunting gear
            "image": f"/images/{dst_img_name}",
            "description": f"High quality {item_name} for professional use.",
            "features": ["Durable Material", "Field Tested", "Premium Quality"]
        })
        
        if idx < 5:
            print(f"{item_name} -> {img_file} -> {dst_img_name}")

    # 6. Write JS file
    js_content = "export const products = " + json.dumps(products, indent=2) + ";"
    js_content += "\n\nexport const companyInfo = {\n"
    js_content += '    name: "Outdoor Gear Pro",\n'
    js_content += '    tagline: "Equipping Your Adventure",\n'
    js_content += '    description: "Leading manufacturer of hunting, camping, and outdoor equipment.",\n'
    js_content += '    contact: {\n'
    js_content += '        email: "contact@outdoorgearpro.com",\n'
    js_content += '        phone: "+1 (555) 123-4567",\n'
    js_content += '        address: "Industrial Park, Manufacturing City"\n'
    js_content += '    }\n'
    js_content += '};\n'
    
    with open(r'E:\Company\company_gemini\src\data\products.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print("\nSuccessfully generated products.js and copied images.")

except Exception as e:
    print(f"Error: {e}")
