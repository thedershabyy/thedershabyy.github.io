import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("rates.csv")
df["Date"] = pd.to_datetime(df["Date"])
df = df.sort_values("Date")  # oldest to newest

plt.plot(df["Date"], df["Rate"])
plt.title("EUR to EGP Exchange Rate")
plt.xlabel("Date")
plt.ylabel("Rate")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("chart.png")
plt.show()