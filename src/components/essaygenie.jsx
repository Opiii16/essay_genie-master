import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function EssayGenie() {
  const [topic, setTopic] = useState("");
  const [wordCount, setWordCount] = useState(500);
  const [generatedEssay, setGeneratedEssay] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [chatInput, setChatInput] = useState("");

  const essayTemplates = [
    "Argumentative Essay",
    "Descriptive Essay",
    "Persuasive Essay",
    "Narrative Essay"
  ];
  const [selectedTemplate, setSelectedTemplate] = useState(essayTemplates[0]);

  const handleGenerateEssay = () => {
    if (!topic) return;
    setGeneratedEssay(`Here is a ${selectedTemplate} on "${topic}" with approximately ${wordCount} words... (Generated content)`);
  };

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    setChatHistory([...chatHistory, { role: "User", text: chatInput }]);
    setChatInput("");
    
    setTimeout(() => {
      setChatHistory(prev => [...prev, { role: "AI", text: `AI response to: "${chatInput}"` }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center text-blue-600"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        EssayGenie - AI Essay Generator
      </motion.h1>
      <Card className="w-full max-w-xl p-4 shadow-lg">
        <CardContent className="flex flex-col space-y-4">
          <Input 
            placeholder="Enter your essay topic..." 
            value={topic} 
            onChange={(e) => setTopic(e.target.value)}
          />
          <select 
            className="p-2 border rounded" 
            value={selectedTemplate} 
            onChange={(e) => setSelectedTemplate(e.target.value)}
          >
            {essayTemplates.map((template) => (
              <option key={template} value={template}>{template}</option>
            ))}
          </select>
          <Input 
            type="number" 
            placeholder="Word count" 
            value={wordCount} 
            onChange={(e) => setWordCount(e.target.value)}
          />
          <Button onClick={handleGenerateEssay} className="bg-blue-500 text-white hover:bg-blue-700">
            Generate Essay
          </Button>
          {generatedEssay && (
            <motion.div
              className="mt-4 p-3 bg-white border rounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {generatedEssay}
            </motion.div>
          )}
        </CardContent>
      </Card>
      
      <Card className="w-full max-w-xl mt-6 p-4 shadow-lg">
        <CardContent className="flex flex-col space-y-4">
          <h2 className="text-xl font-semibold">AI Chat Assistant</h2>
          <div className="h-40 overflow-y-auto bg-white p-2 border rounded">
            {chatHistory.map((msg, index) => (
              <div key={index} className={msg.role === "User" ? "text-right" : "text-left"}>
                <span className={`p-2 rounded ${msg.role === "User" ? "bg-blue-300" : "bg-gray-300"}`}>{msg.text}</span>
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <Input 
              placeholder="Ask AI for writing help..." 
              value={chatInput} 
              onChange={(e) => setChatInput(e.target.value)}
            />
            <Button onClick={handleChatSubmit} className="bg-green-500 text-white hover:bg-green-700">
              Send
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


























































