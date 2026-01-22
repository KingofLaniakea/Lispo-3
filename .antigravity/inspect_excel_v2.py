
import pandas as pd
import json

try:
    file_path = r'E:\Company\网站大类名+照片.xlsx'
    df = pd.read_excel(file_path)
    
    # Print columns
    print("Columns:", df.columns.tolist())
    
    # Print first 5 rows as dict
    print(json.dumps(df.head(5).to_dict(orient='records'), ensure_ascii=False, default=str))

except Exception as e:
    print(f"Error: {e}")
