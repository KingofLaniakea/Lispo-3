
import pandas as pd
import json

try:
    file_path = r'E:\Company\网站大类名+照片.xlsx'
    xls = pd.ExcelFile(file_path)
    print("Sheets:", xls.sheet_names)
    
    for sheet in xls.sheet_names:
        print(f"--- Sheet: {sheet} ---")
        df = pd.read_excel(file_path, sheet_name=sheet)
        # Drop rows where all are NaN
        df_clean = df.dropna(how='all')
        
        # Print first 20 rows of cleaned data
        print(json.dumps(df_clean.head(20).to_dict(orient='records'), ensure_ascii=False, default=str))

except Exception as e:
    print(f"Error: {e}")
