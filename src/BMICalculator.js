export const bmiCalculation = (weight, height, method) => {
    parseFloat(weight);
    parseFloat(height);
    let bmi;
  
    weight = isNaN(weight) ? 0 : weight;
    height = isNaN(height) ? 0 : height;
  
    bmi = weight / (height / 100 * height / 100);
  
    let finalBMI = parseFloat(bmi.toFixed(2));
    let BMIMessage = setBMIMessage(finalBMI)
    if (isNaN(finalBMI) || !isFinite(finalBMI) || finalBMI === 0) {
      return '';
    } else {
      return `You are ${BMIMessage} with a BMI of ${finalBMI}`;
    }      
  }
  
  const setBMIMessage = (finalBMI) => {
    if (finalBMI < 18.5) {
      return "slowly dying of starvation";
    }
  
    if (finalBMI > 18.5 && finalBMI < 25) {
      return "Normal.  Nothing to see here";
    }
  
    if (finalBMI > 25 && finalBMI < 30) {
      return "fat.  Maybe try a veggie?";
    }
  
    if (finalBMI > 30) {
      return "Obese.  'Nom nom nom'";
    }
  }