import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5001; // Use a different port for this service

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection for the student marks database
mongoose.connect('mongodb://127.0.0.1:27017/school', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB (school database)");
}).catch(err => {
  console.error("Error connecting to MongoDB (school database):", err);
});

// Student Schema
const studentSchema = new mongoose.Schema({
  rollNo: { type: String, required: true },
  name: { type: String, required: true },
  marks: { type: Number, required: true },
});

const Student = mongoose.model("Student", studentSchema);

// API endpoint to get all students
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
});

// API endpoint to get a student's marks by rollNo
app.get("/api/students/:rollNo", async (req, res) => {
  const { rollNo } = req.params;
  try {
    const student = await Student.findOne({ rollNo });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch student" });
  }
});

// API endpoint to update student marks
app.put("/api/students/updateMarks", async (req, res) => {
  try {
    const { rollNo, marks } = req.body;

    // Ensure marks is a valid number between 0 and 100
    if (typeof marks !== "number" || marks < 0 || marks > 100) {
      return res.status(400).json({ error: "Marks must be a number between 0 and 100" });
    }

    const student = await Student.findOne({ rollNo });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    student.marks = marks;
    await student.save();
    res.json({ message: "Marks updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update marks" });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Student Marks Service running on http://localhost:${port}`);
});
