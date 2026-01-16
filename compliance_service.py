# compliance_service.py

def validate_investor_accreditation(investor_data):
    """
    Validates if an investor is accredited based on SEC 506(c) standards.
    Returns: (bool, reason)
    """
    INCOME_THRESHOLD_SINGLE = 200000
    NET_WORTH_THRESHOLD = 1000000

    # Check for Net Worth
    if investor_data.get('net_worth', 0) >= NET_WORTH_THRESHOLD:
        return True, "Accredited: Net Worth Requirement Met"

    # Check for Annual Income
    if investor_data.get('annual_income', 0) >= INCOME_THRESHOLD_SINGLE:
        return True, "Accredited: Income Requirement Met"
    
    # Check if KYC/AML docs are expired
    if investor_data.get('kyc_expiry_days', 0) <= 0:
        return False, "Stalled: KYC Documentation Expired"

    return False, "Not Accredited: Thresholds not met"

# Example HubSpot Payload Trigger
investor = {"net_worth": 1200000, "kyc_expiry_days": -2}
status, message = validate_investor_accreditation(investor)
print(f"Result: {status} | Message: {message}")
