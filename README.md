# bfhl - 22BCE0826 - Dhevatha S P

# BFHL API – VIT Full Stack Assignment

This project implements the **BFHL REST API** as part of the Full Stack assignment.  
The API processes an input array and returns categorized results such as odd/even numbers, alphabets (uppercased), special characters, sum of numbers, and a reversed alternating-caps string of alphabets.

---

## 📌 Features
- Built with **Node.js + Express**
- Hosted on **Vercel**
- Follows assignment format strictly:
  - `is_success` flag
  - `user_id` = `{full_name_ddmmyyyy}` (all lowercase)
  - Numbers returned as **strings**
  - Sum returned as a **string**
- Handles errors gracefully (invalid/missing `data` field)

---

## 🚀 API Endpoint


---

## 📥 Request Format
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}


{
  "is_success": true,
  "user_id": "dhevatha_s_p_10092003",
  "email": "dhev10mys@gmail.com",
  "roll_number": "22BCE0000",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}

```
## 🌍 API Endpoint (Hosted on Vercel)
https://bfhl-jdgtivpzb-dhevatha-s-ps-projects.vercel.app
