import axios from 'axios';

const API_BASE_URL = 'http://oprahjane16pythonanywhere/api'; // Adjust based on your backend URL

// Get all tutors
export const getTutors = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tutors`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch tutors';
  }
};

// Delete tutor
export const deleteTutor = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/tutors/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to delete tutor';
  }
};

// Similarly add other API functions (getServices, deleteService, etc.)
export const getServices = async () => {
  // Implement similar to getTutors
};
export const getCurrentUser = async () => {
  // Implement similar to getTutors
};


export const deleteService = async (id) => {
  // Implement similar to deleteTutor
};

export const getResources = async () => {
  // Implement similar to getTutors
};

export const deleteResource = async (id) => {
  // Implement similar to deleteTutor
};

export const getEssays = async () => {
  // Implement similar to getTutors
};

export const deleteEssay = async (id) => {
  // Implement similar to deleteTutor
};

