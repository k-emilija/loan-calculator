"use strict";

// Validēt formu - ja nav ievadīta summa, nevar aprēķināt maksājumus
// Ja nav ievadīts amout, poga nav aktīva, ja ir - poga ir aktīva un viņu var nospiest, lai reset formu
// reset poga visu reseto uz sākotnējo stāvokli
// formā tiek automātiski viss aprēķināts, mainot summu un procentus
// jāaprēķina mēneša un kopējais maksājums un jāizvada $0.00 vietā
