"use client";
import React, { useState } from "react";
import { FileText, Upload, Send, Save } from "lucide-react";

const NewPost = () => {
  const [formData, setFormData] = useState({
    topic: "",
    description: "",
    targetAudience: "",
    tags: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreate = () => {
    console.log("Creating post with data:", formData);
    // Handle create logic here
  };

  const handleUpload = () => {
    console.log("Uploading post with data:", formData);
    // Handle upload logic here
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
          <FileText className="h-5 w-5 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Create New Post</h1>
          <p className="text-gray-600">
            Share your thoughts and ideas with your audience
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="topic"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Topic
            </label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
              placeholder="Enter the main topic of your post"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={8}
              placeholder="Write your post content here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="targetAudience"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Target Audience
              </label>
              <select
                id="targetAudience"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select target audience</option>
                <option value="general">General Public</option>
                <option value="professionals">Professionals</option>
                <option value="students">Students</option>
                <option value="entrepreneurs">Entrepreneurs</option>
                <option value="developers">Developers</option>
                <option value="marketers">Marketers</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="e.g., tech, business, innovation"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              type="button"
              onClick={handleCreate}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              <Send className="mr-2 h-5 w-5" />
              Create Post
            </button>
            <button
              type="button"
              onClick={handleUpload}
              className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all flex items-center justify-center"
            >
              <Upload className="mr-2 h-5 w-5" />
              Upload Draft
            </button>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 transition-colors flex items-center"
            >
              <Save className="mr-2 h-4 w-4" />
              Save as Draft
            </button>
          </div>
        </form>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          💡 Writing Tips
        </h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Keep your topic clear and engaging</li>
          <li>• Use descriptive language that resonates with your audience</li>
          <li>• Add relevant tags to improve discoverability</li>
          <li>• Preview your post before publishing</li>
        </ul>
      </div>
    </div>
  );
};

export default NewPost;
