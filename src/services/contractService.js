import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export const generateContractPDF = (data, tenant) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  
  // Header
  doc.setFontSize(20);
  doc.text('TENANCY AGREEMENT', pageWidth / 2, 20, { align: 'center' });
  
  doc.setFontSize(12);
  doc.text('This agreement is made on ' + new Date().toLocaleDateString(), 20, 40);

  // Parties
  doc.setFontSize(14);
  doc.text('BETWEEN', 20, 55);
  doc.setFontSize(12);
  doc.text('Property Manager (Landlord\'s Agent)', 20, 65);
  doc.text('AND', 20, 80);
  doc.text(`${tenant.name} (Tenant)`, 20, 90);

  // Property Details
  doc.setFontSize(14);
  doc.text('1. PROPERTY DETAILS', 20, 110);
  doc.setFontSize(12);
  doc.text(`Property Address: ${tenant.property}`, 25, 120);
  doc.text(`Unit: ${tenant.unit}`, 25, 130);

  // Terms
  doc.setFontSize(14);
  doc.text('2. TENANCY TERMS', 20, 150);
  doc.setFontSize(12);
  doc.text(`Lease Period: ${data.startDate} to ${data.endDate}`, 25, 160);
  doc.text(`Monthly Rent: ₦${data.rentAmount}`, 25, 170);
  doc.text(`Security Deposit: ₦${data.securityDeposit}`, 25, 180);

  // Included Services
  doc.setFontSize(14);
  doc.text('3. INCLUDED SERVICES', 20, 200);
  doc.setFontSize(12);
  let yPos = 210;
  if (data.includeUtilities) {
    doc.text('- Utilities', 25, yPos);
    yPos += 10;
  }
  if (data.includeMaintenance) {
    doc.text('- Maintenance', 25, yPos);
    yPos += 10;
  }
  if (data.includeParking) {
    doc.text('- Parking', 25, yPos);
    yPos += 10;
  }

  // Additional Terms
  if (data.additionalTerms) {
    doc.addPage();
    doc.setFontSize(14);
    doc.text('4. ADDITIONAL TERMS AND CONDITIONS', 20, 20);
    doc.setFontSize(12);
    const terms = doc.splitTextToSize(data.additionalTerms, pageWidth - 40);
    doc.text(terms, 20, 35);
  }

  // Signatures
  doc.addPage();
  doc.setFontSize(14);
  doc.text('SIGNATURES', pageWidth / 2, 20, { align: 'center' });
  
  doc.setFontSize(12);
  doc.text('Landlord/Agent:', 20, 50);
  doc.line(20, 70, 100, 70);
  
  doc.text('Tenant:', 20, 100);
  doc.line(20, 120, 100, 120);
  
  doc.text('Date:', 20, 150);
  doc.line(20, 170, 100, 170);

  return doc;
}; 