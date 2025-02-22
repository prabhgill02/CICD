async function calculate() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;

    const response = await fetch("/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ a: Number(a), b: Number(b) })
    });

    const data = await response.json();
    document.getElementById("result").innerText = JSON.stringify(data);
}
