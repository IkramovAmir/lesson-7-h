document.querySelector(".uppercase-btn").onclick = function() {
    let input = document.querySelector(".text-input");
    document.querySelector(".result").innerText = input.value.toUpperCase();
}

// enter number example: 2,3,4
document.querySelector(".sum-btn").onclick = function() {
    let input = document.querySelector(".sum-input").value;
    let numbers = input.split(",");
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
    }
    document.querySelector(".sum-result").innerText = "Yig‘indi: " + sum;
}

let deleteButtons = document.querySelectorAll(".delete-btn");
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function() {
        this.parentElement.remove();
    }
}

document.querySelector(".check-password-btn").onclick = function() {
    let password = document.querySelector(".password-input").value;
    let result = "";
    if (password.length < 6) {
        result = "Juda zaif";
    } else if (password.length <= 10) {
        result = "O‘rtacha";
    } else {
        result = "Kuchli";
    }
    document.querySelector(".password-result").innerText = result;
}

document.querySelector(".fizzbuzz-btn").onclick = function() {
    let num = Number(document.querySelector(".fizzbuzz-input").value);
    let result = "";
    if (num % 3 === 0 && num % 5 === 0) {
        result = "FizzBuzz";
    } else if (num % 3 === 0) {
        result = "Fizz";
    } else if (num % 5 === 0) {
        result = "Buzz";
    } else {
        result = num;
    }
    document.querySelector(".fizzbuzz-result").innerText = result;
}

document.querySelector(".timer-btn").onclick = function() {
    let count = 0;
    let timer = setInterval(function() {
        document.querySelector(".timer-result").innerText = count;
        count++;
        if (count > 10) {
            clearInterval(timer);
        }
    }, 1000);
}

document.querySelector(".table-btn").onclick = function() {
    let num = Number(document.querySelector(".table-input").value);
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += num + " x " + i + " = " + (num * i) + "\n";
    }
    document.querySelector(".table-result").innerText = result;
}
