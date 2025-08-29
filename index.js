import express from "express";

const app = express();
app.use(express.json());

// ✅ Change these details to yours
const fullName = "dhevatha_s_p";
const dob = "27102003"; // example ddmmyyyy
const emailAddr = "dhevatha.sp2022@vitstudent.ac.in";
const rollNum = "22BCE0826";

// Helper function → alternating caps reverse string
function makeFancyString(str) {
  let reversed = str.split("").reverse();
  return reversed
    .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
}

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Input should contain an array with key 'data'",
      });
    }

    let evens = [];
    let odds = [];
    let letters = [];
    let specials = [];
    let totalSum = 0;
    let alphaConcat = "";

    data.forEach((item) => {
      if (!isNaN(item) && item.trim() !== "") {
        // check number
        const num = parseInt(item, 10);
        if (!isNaN(num)) {
          if (num % 2 === 0) {
            evens.push(item.toString());
          } else {
            odds.push(item.toString());
          }
          totalSum += num;
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        letters.push(item.toUpperCase());
        alphaConcat += item;
      } else {
        specials.push(item);
      }
    });

    const responsePayload = {
      is_success: true,
      user_id: `${fullName.toLowerCase()}_${dob}`,
      email: emailAddr,
      roll_number: rollNum,
      odd_numbers: odds,
      even_numbers: evens,
      alphabets: letters,
      special_characters: specials,
      sum: totalSum.toString(),
      concat_string: makeFancyString(alphaConcat),
    };

    return res.status(200).json(responsePayload);
  } catch (err) {
    return res.status(500).json({
      is_success: false,
      error: err.message,
    });
  }
});

app.get("/", (req, res) => {
  res.send("BFHL API is running ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server live on port ${PORT}`));
