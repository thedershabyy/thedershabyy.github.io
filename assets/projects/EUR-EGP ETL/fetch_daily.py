import requests
from datetime import date

response = requests.get("https://open.er-api.com/v6/latest/EUR")
data = response.json()
rate = data["rates"]["EGP"]
today = date.today().isoformat()

print(f"{today}: {rate}")

with open("rates.csv", "a") as f:
    f.write(f"{today},{rate}\n")