const calculateEMI = () => {
    const [loanAmount, interestRate, loanTenure] = [
      document.getElementById('loanAmount').value,
      document.getElementById('interestRate').value,
      document.getElementById('loanTenure').value
    ];
  
    const emi = Math.round(loanAmount * (interestRate / 1200) * (1 + interestRate / 1200) ** (loanTenure * 12) / ((1 + interestRate / 1200) ** (loanTenure * 12) - 1));
  
    document.getElementById('emiResult').innerHTML = `EMI: ₹${emi}`;
  };
