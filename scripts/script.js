"use strict";

// Poga ir neaktīva, kāmēr nav aizpildīti visi lauciņi. Kad ir aizpildīti visi lauciņi, tad pogas opacity ir 100% un viņu ir iespējams nospiest, lai resetotu formu atpakaļ tādu, kāda viņa bija.
// Aprēķini formā notiek automātiski, aizpildot VISUS formas lauciņus. Aprēķini nenotiek, ka ir nepareizi ievadīta summa vai nav ievadīta.
// Aprēķini automātiski nomainās, nomainot kādu formas input lauciņu.
// Formas pirmās select opcijas neskatās, tās ir disabled un norāda tikai to, ka vajag izvēlēties procentu likmi un maksāšanas periodu.
// Ievadot nepieļaujamu summu (kaut kas, kas nav skaitlis, vai arī negatīvs skaitlis), tiek attēlots kļūdas paziņojums.
// Kalkulators aprēķina ikmēneša maksājumu un kopējo plānoto izmaksājamo summu par visu termiņa laiku. Ikmēneša maksājuma aprēķinam izmantot doto formulu, kuras rezultātu var pārbaudīt ar MS Excel funckiju pmt().
// Izvadītos aprēķinus izvada 0.00 vietā pie mēneša un kopēja maksājuma.

// Summa var būt tikai pozitīvi skaitļi
// Gada procentu likme 7%, 10%, 15%
// Līzinga terminš: 6 mēn., 12 mēn., 18 mēn., 2 gadi, 5 gadi, 7 gadi (apprēķini formulā tiek veikti pēc noteiktā mēnešu skaita)

// Get form elements
// Function to calculate monthly payment and total payment
// Function to check if all form fields are filled
// Function to enable or disable the reset button based on form field completion
// Event listeners for form inputs
// Event listener for the reset button
