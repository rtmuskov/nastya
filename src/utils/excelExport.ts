import { utils, writeFile } from 'xlsx';
import { UserData } from '../context/AuthContext';

export const saveRegistrationToExcel = (userData: UserData) => {
  try {
    // Get existing data if available
    let existingData: UserData[] = [];
    const existingExcel = localStorage.getItem('registrationExcel');
    
    if (existingExcel) {
      existingData = JSON.parse(existingExcel);
    }
    
    // Add new user data
    existingData.push(userData);
    
    // Save to localStorage for persistence
    localStorage.setItem('registrationExcel', JSON.stringify(existingData));
    
    // Create worksheet from data
    const worksheet = utils.json_to_sheet(existingData);
    
    // Create workbook and append worksheet
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Регистрации');
    
    // Generate Excel file
    writeFile(workbook, 'GoldFashion_Registrations.xlsx');
    
    console.log('Registration data saved to Excel file');
    return true;
  } catch (error) {
    console.error('Error saving to Excel:', error);
    return false;
  }
};

export const downloadRegistrationExcel = () => {
  try {
    const existingExcel = localStorage.getItem('registrationExcel');
    
    if (!existingExcel) {
      return false;
    }
    
    const data = JSON.parse(existingExcel);
    
    // Create worksheet from data
    const worksheet = utils.json_to_sheet(data);
    
    // Create workbook and append worksheet
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Регистрации');
    
    // Generate Excel file
    writeFile(workbook, 'GoldFashion_Registrations.xlsx');
    
    return true;
  } catch (error) {
    console.error('Error downloading Excel:', error);
    return false;
  }
};