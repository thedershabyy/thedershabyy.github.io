from project import convert, format_output

def test_convert():
    assert convert(10, 60.5) == 605.00
    assert convert(100, 60.5) == 6050.00
    assert convert(0, 60.5) == 0.00
    assert convert(1.5, 60.5) == 90.75


def test_format_output():
    assert format_output(100, 60.5, 6050.0) == "100.00 EUR = 6,050.00 EGP (Rate: 60.50)"
    assert format_output(0, 60.5, 0.0) == "0.00 EUR = 0.00 EGP (Rate: 60.50)"
    assert format_output(1000.5, 60.5, 60530.25) == "1,000.50 EUR = 60,530.25 EGP (Rate: 60.50)"