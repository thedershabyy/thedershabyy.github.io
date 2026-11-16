import sys
import requests

def main():
    
    try:
        eur_amount = float(input("Enter the amount in EUR: "))
    except ValueError:
        sys.exit("Please enter a valid number.       WATCH OUT!!")
        
    rate = get_rate()
    if not rate:
        sys.exit("Couldn't get the exchange rate right now. Check your internet connection.")
        
    egp_amount = convert(eur_amount, rate)
    print(format_output(eur_amount, rate, egp_amount))


def get_rate():
    url = "https://open.er-api.com/v6/latest/EUR"
    
    try:
        response = requests.get(url)
        data = response.json()
        return data["rates"]["EGP"]
    except requests.RequestException:
        return None


def convert(amount, rate):
    return round(amount * rate, 2)


def format_output(amount, rate, converted):
    return f"{amount:,.2f} EUR = {converted:,.2f} EGP (Rate: {rate:,.2f})"


if __name__ == "__main__":
    main()