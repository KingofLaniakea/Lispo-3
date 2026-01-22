
import pandas as pd
import json
import os
import shutil

try:
    file_path = r'E:\Company\网站大类名+照片.xlsx'
    
    # Check if file exists
    if not os.path.exists(file_path):
        print(json.dumps({"error": "File not found"}))
        exit(1)

    # Read Excel - attempt to read all sheets
    # xl = pd.ExcelFile(file_path) # Might need openpyxl
    df = pd.read_excel(file_path)
    
    # Fill specific NaN with empty string just for safety in JSON
    df = df.fillna('')
    
    # Convert to records
    records = df.to_dict(orient='records')
    
    print(json.dumps(records, ensure_ascii=False))

except Exception as e:
    print(json.dumps({"error": str(e)}))
