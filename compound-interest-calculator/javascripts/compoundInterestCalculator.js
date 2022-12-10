let currentProgress = 0;
let progress = document.getElementById("progress");
let annualCount = document.getElementById("annualCount");
let interestRate = document.getElementById("interestRate");
let numberOfYears = document.getElementById("numberOfYears");
let principalAmount = document.getElementById("principalAmount");
let compoundedInterest = document.getElementById("compoundedInterest");

function calculateCompundInterest() {
  let numberOfTimes = Number(annualCount.value);
  let interestRateR = Number(interestRate.value) / 100;
  let amountAtStart = Number(principalAmount.value);
  let totalNUmberOfYears = Number(numberOfYears.value);

  let rateDivided = interestRateR / numberOfTimes;
  let finalAmount =
    amountAtStart * (1 + rateDivided) ** (numberOfTimes * totalNUmberOfYears);
  compoundedInterest.textContent = isNaN(finalAmount)
    ? 0
    : finalAmount.toFixed(2);
}

function changeProgress() {
  progress.value = (currentProgress / 4) * 100;
}

annualCount.addEventListener("input", function () {
  if (isNaN(Number(annualCount.value))) {
    if (currentProgress > 0) {
      currentProgress -= 1;
    }
  } else {
    if (currentProgress < 4) {
      currentProgress += 1;
    }
  }
  changeProgress();
  calculateCompundInterest();
});

interestRate.addEventListener("input", function () {
  if (isNaN(Number(interestRate.value))) {
    if (currentProgress > 0) {
      currentProgress -= 1;
    }
  } else {
    if (currentProgress < 4) {
      currentProgress += 1;
    }
  }
  changeProgress();
  calculateCompundInterest();
});
numberOfYears.addEventListener("input", function () {
  if (isNaN(Number(numberOfYears.value))) {
    if (currentProgress > 0) {
      currentProgress -= 1;
    }
  } else {
    if (currentProgress < 4) {
      currentProgress += 1;
    }
  }
  changeProgress();
  calculateCompundInterest();
});
principalAmount.addEventListener("input", function () {
  if (isNaN(Number(principalAmount.value))) {
    if (currentProgress > 0) {
      currentProgress -= 1;
    }
  } else {
    if (currentProgress < 4) {
      currentProgress += 1;
    }
  }
  changeProgress();
  calculateCompundInterest();
});
