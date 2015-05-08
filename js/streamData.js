/**
 * Created by atg on 16/09/2014.
 */

    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var minYear = 1914;
    var meanYearlyPrecipOct =
[
    {"1914" : 56.2},
    {"1915" : 38.6},
    {"1916" : 59.7},
    {"1917" : 81.0},
    {"1918" : 43.9},
    {"1919" : 58.5},
    {"1920" : 36.5},
    {"1921" : 42.5},
    {"1922" : 24.2},
    {"1923" : 81.8},
    {"1924" :103.7},
    {"1925" : 69.5},
    {"1926" : 64.0},
    {"1927" : 55.0},
    {"1928" : 94.7},
    {"1929" : 77.6},
    {"1930" : 42.6},
    {"1931" : 19.1},
    {"1932" : 87.2},
    {"1933" : 81.3},
    {"1934" : 39.8},
    {"1935" : 75.1},
    {"1936" : 47.0},
    {"1937" : 58.6},
    {"1938" : 65.3},
    {"1939" :111.3},
    {"1940" : 82.8},
    {"1941" : 64.6},
    {"1942" : 63.3},
    {"1943" : 41.5},
    {"1944" : 71.0},
    {"1945" : 77.6},
    {"1946" : 33.9},
    {"1947" :  8.3},
    {"1948" : 57.4},
    {"1949" :100.2},
    {"1950" : 20.0},
    {"1951" : 26.1},
    {"1952" : 66.9},
    {"1953" : 54.8},
    {"1954" : 67.2},
    {"1955" : 59.6},
    {"1956" : 38.9},
    {"1957" : 36.0},
    {"1958" : 56.7},
    {"1959" : 48.2},
    {"1960" :126.0},
    {"1961" : 69.5},
    {"1962" : 20.8},
    {"1963" : 37.2},
    {"1964" : 31.1},
    {"1965" : 15.0},
    {"1966" : 86.7},
    {"1967" :105.4},
    {"1968" : 52.9},
    {"1969" :  8.6},
    {"1970" : 29.0},
    {"1971" : 54.1},
    {"1972" : 18.3},
    {"1973" : 42.2},
    {"1974" : 97.0},
    {"1975" : 22.3},
    {"1976" :106.2},
    {"1977" : 25.8},
    {"1978" :  9.0},
    {"1979" : 56.3},
    {"1980" : 88.1},
    {"1981" : 68.2},
    {"1982" : 81.0},
    {"1983" : 39.2},
    {"1984" : 49.5},
    {"1985" : 34.1},
    {"1986" : 58.0},
    {"1987" :116.5},
    {"1988" : 49.4},
    {"1989" : 52.6},
    {"1990" : 61.7},
    {"1991" : 35.1},
    {"1992" : 75.4},
    {"1993" : 76.6},
    {"1994" : 64.3},
    {"1995" : 22.1},
    {"1996" : 50.6},
    {"1997" : 55.5},
    {"1998" : 99.3},
    {"1999" : 76.4},
    {"2000" :104.7},
    {"2001" : 80.0},
    {"2002" :105.3},
    {"2003" : 49.5},
    {"2004" :100.6},
    {"2005" : 69.8},
    {"2006" : 72.3},
    {"2007" : 39.0},
    {"2008" : 61.7},
    {"2009" : 49.1},
    {"2010" : 56.4},
    {"2011" : 35.7},
    {"2012" : 76.5},
    {"2013" :103.1},
    {"2014" :-99.9}
];

var meanYearlyOct =
    [
{"1914" : 10.3},
{"1915" : 9.1},
{"1916" : 10.55},
{"1917" : 7.5},
{"1918" : 9.3},
{"1919" : 7.35},
{"1920" : 10.4},
{"1921" : 12.8},
{"1922" : 8.2},
{"1923" : 9.7},
{"1924" : 10.1},
{"1925" : 10.4},
{"1926" : 8.1},
{"1927" : 10.5},
{"1928" : 10.1},
{"1929" : 9.6},
{"1930" : 10.55},
{"1931" : 8.8},
{"1932" : 8.8},
{"1933" : 10.10},
{"1934" : 10.6},
{"1935" : 9.5},
{"1936" : 9.4},
{"1937" : 10.4},
{"1938" : 10.5},
{"1939" : 8.2},
{"1940" : 9.6},
{"1941" : 10.4},
{"1942" : 10.39},
{"1943" : 10.60},
{"1944" : 9.3},
{"1945" : 11.95},
{"1946" : 9.8},
{"1947" : 10.6},
{"1948" : 10.14},
{"1949" : 11.7},
{"1950" : 9.60},
{"1951" : 9.4},
{"1952" : 8.8},
{"1953" : 9.7},
{"1954" : 11.9},
{"1955" : 9.2},
{"1956" : 9.4},
{"1957" : 10.8},
{"1958" : 10.8},
{"1959" : 12.6},
{"1960" : 10.3},
{"1961" : 10.9},
{"1962" : 10.39},
{"1963" : 11.15},
{"1964" : 8.9},
{"1965" : 11},
{"1966" : 10.1},
{"1967" : 10.8},
{"1968" : 12.5},
{"1969" : 13},
{"1970" : 10.7},
{"1971" : 11.3},
{"1972" : 10.6},
{"1973" : 9},
{"1974" : 7.8},
{"1975" : 9.85},
{"1976" : 10.6},
{"1977" : 11.75},
{"1978" : 11.9},
{"1979" : 11.35},
{"1980" : 9.05},
{"1981" : 8.55},
{"1982" : 10.05},
{"1983" : 10.45},
{"1984" : 11.1},
{"1985" : 10.95},
{"1986" : 11},
{"1987" : 9.7},
{"1988" : 10.39},
{"1989" : 11.7},
{"1990" : 11.85},
{"1991" : 10.2},
{"1992" : 7.8},
{"1993" : 8.45},
{"1994" : 10.2},
{"1995" : 12.9},
{"1996" : 11.65},
{"1997" : 10.25},
{"1998" : 10.64},
{"1999" : 10.7},
{"2000" : 10.3},
{"2001" : 13.29},
{"2002" : 10.1},
{"2003" : 9.25},
{"2004" : 10.5},
{"2005" : 13.1},
{"2006" : 13.05},
{"2007" : 10.85},
{"2008" : 9.65},
{"2009" : 11.55},
{"2010" : 10.35},
{"2011" : 12.65},
{"2012" : 9.65},
{"2013" : 12.5},
{"2014" : -99}
        ];

var meanYearlyNov =
    [
        {"1914" :   6.8},
        {"1915" :   2.8},
        {"1916" :   6.8},
        {"1917" :   7.8},
        {"1918" :   5.5},
        {"1919" :   3.3},
        {"1920" :   6.8},
        {"1921" :   4.6},
        {"1922" :   5.9},
        {"1923" :   3.3},
        {"1924" :   7.1},
        {"1925" :   3.6},
        {"1926" :   5.9},
        {"1927" :   6.2},
        {"1928" :   7.6},
        {"1929" :   6.7},
        {"1930" :   6.2},
        {"1931" :   7.8},
        {"1932" :   6.6},
        {"1933" :   5.6},
        {"1934" :   6.1},
        {"1935" :   6.9},
        {"1936" :   5.5},
        {"1937" :   5.1},
        {"1938" :   9.4},
        {"1939" :   8.7},
        {"1940" :   6.9},
        {"1941" :   6.6},
        {"1942" :   4.9},
        {"1943" :   6.3},
        {"1944" :   6.2},
        {"1945" :   7.2},
        {"1946" :   8.1},
        {"1947" :   7.2},
        {"1948" :   7.3},
        {"1949" :   6.6},
        {"1950" :   5.7},
        {"1951" :   8.5},
        {"1952" :   4.2},
        {"1953" :   8.5},
        {"1954" :   6.9},
        {"1955" :   7.0},
        {"1956" :   6.0},
        {"1957" :   6.4},
        {"1958" :   6.4},
        {"1959" :   7.1},
        {"1960" :   7.3},
        {"1961" :   6.0},
        {"1962" :   5.5},
        {"1963" :   8.2},
        {"1964" :   7.4},
        {"1965" :   4.5},
        {"1966" :   5.6},
        {"1967" :   5.4},
        {"1968" :   6.5},
        {"1969" :   5.4},
        {"1970" :   7.8},
        {"1971" :   6.0},
        {"1972" :   6.3},
        {"1973" :   6.0},
        {"1974" :   6.8},
        {"1975" :   6.3},
        {"1976" :   6.3},
        {"1977" :   6.6},
        {"1978" :   8.5},
        {"1979" :   6.8},
        {"1980" :   6.6},
        {"1981" :   7.8},
        {"1982" :   8.0},
        {"1983" :   7.5},
        {"1984" :   8.0},
        {"1985" :   4.1},
        {"1986" :   7.8},
        {"1987" :   6.5},
        {"1988" :   5.2},
        {"1989" :   6.2},
        {"1990" :   6.9},
        {"1991" :   6.8},
        {"1992" :   7.4},
        {"1993" :   4.6},
        {"1994" :  10.1},
        {"1995" :   7.7},
        {"1996" :   5.9},
        {"1997" :   8.4},
        {"1998" :   6.2},
        {"1999" :   7.9},
        {"2000" :   7.0},
        {"2001" :   7.5},
        {"2002" :   8.5},
        {"2003" :   8.1},
        {"2004" :   7.7},
        {"2005" :   6.2},
        {"2006" :   8.1},
        {"2007" :   7.3},
        {"2008" :   7.0},
        {"2009" :   8.7},
        {"2010" :   5.2},
        {"2011" :   9.6},
        {"2012" :   6.8},
        {"2013" :   6.2},
        {"2014" :   -99}
    ];

//Incorporate monthly temp values into one table
//Table starts from 1914 and goes to 2014
//Jan, Feb, Mar, etc ....Dec

var meanMonthlyTemps = [
    [ 3.7, 6.8, 6.1,  9.8, 10.8, 14.5, 15.8, 16.1, 13.3, 10.3, 6.8,   4.6  ],
    [ 4.1, 4.3, 5.2,  7.9, 10.8, 14.4, 14.6, 15.3, 13.4, 9.1,  2.8,   5.3  ],
    [ 7.5, 3.8, 3.3,  8.2, 11.6, 11.8, 15.3, 16.4, 13.0, 10.55,6.8,   1.9  ],
    [ 1.6, 0.9, 3.2,  5.4, 12.8, 15.2, 16.1, 15.3, 14.0, 7.5,  7.8,   2.3  ],
    [ 3.8, 6.5, 5.7,  6.7, 13.0, 13.3, 15.4, 16.1, 11.9, 9.3,  5.5,   6.9  ],
    [ 2.9, 1.9, 3.6,  7.1, 13.5, 14.3, 13.9, 15.7, 12.7, 7.35, 3.3,   5.5  ],
    [ 5.2, 6.0, 7.2,  8.2, 11.8, 14.4, 14.1, 13.6, 13.0, 10.4, 6.8,   4.2  ],
    [ 7.3, 4.8, 7.4,  8.0, 11.5, 14.7, 18.5, 15.4, 14.1, 12.8, 4.6,   6.5  ],
    [ 3.7, 4.4, 4.6,  5.5, 12.7, 13.8, 13.7, 13.6, 12.2, 8.2,  5.9,   5.8  ],
    [ 5.6, 5.6, 6.5,  7.6,  9.2, 12.5, 17.5, 15.2, 12.5, 9.7,  3.3,   3.8  ],
    [ 4.7, 3.3, 4.1,  6.9, 11.6, 13.9, 15.3, 14.1, 13.3, 10.1, 7.1,   6.8  ],
    [ 5.3, 5.2, 4.9,  7.5, 11.6, 15.0, 16.8, 15.4, 11.5, 10.4, 3.6,   2.8  ],
    [ 4.6, 6.8, 6.3,  9.3, 10.2, 13.6, 17.1, 16.2, 14.4, 8.1,  5.9,   4.2  ],
    [ 4.6, 3.9, 7.3,  7.9, 11.2, 12.6, 15.9, 15.7, 12.5, 10.5, 6.2,   2.1  ],
    [ 5.2, 5.8, 6.3,  8.5, 10.9, 12.9, 16.1, 15.3, 12.8, 10.1, 7.6,   3.4  ],
    [ 1.3, 0.4, 6.2,  6.8, 11.3, 13.3, 16.0, 15.4, 15.3, 9.6,  6.7,   5.8  ],
    [ 5.6, 2.5, 5.3,  8.3, 10.7, 15.3, 15.2, 15.7, 13.6, 10.55,6.2,   4.3  ],
    [ 3.2, 3.9, 4.2,  7.7, 11.4, 14.4, 15.3, 14.4, 11.5, 8.8,  7.8,   5.3  ],
    [ 6.3, 2.9, 4.7,  6.9, 10.5, 14.1, 16.1, 17.1, 12.9, 8.8,  6.6,   5.7  ],
    [ 2.2, 4.3, 7.3,  8.8, 12.2, 15.6, 17.8, 17.6, 14.9, 10.10,5.6,   1.6  ],
    [ 4.1, 3.8, 4.8,  8.0, 11.3, 14.9, 18.2, 15.4, 14.6, 10.6, 6.1,   8.1  ],
    [ 4.5, 5.8, 6.6,  8.2,  9.9, 15.1, 17.1, 16.6, 13.6, 9.5,  6.9,   2.8  ],
    [ 3.7, 2.6, 7.1,  6.3, 11.5, 14.7, 15.3, 16.1, 14.4, 9.4,  5.5,   5.3  ],
    [ 5.2, 5.6, 3.6,  9.2, 12.2, 14.1, 16.1, 16.9, 13.4, 10.4, 5.1,   3.0  ],
    [ 5.7, 5.1, 9.1,  7.6, 10.7, 14.4, 15.2, 16.3, 13.8, 10.5, 9.4,   4.4  ],
    [ 4.2, 5.6, 5.8,  8.8, 11.4, 14.2, 15.5, 16.4, 14.2, 8.2,  8.7,   3.2  ],
    [-1.4, 2.6, 6.0,  8.7, 12.5, 16.4, 15.1, 15.6, 12.8, 9.6,  6.9,   3.8  ],
    [ 0.5, 3.5, 5.1,  6.4,  9.4, 15.1, 17.3, 14.7, 14.5, 10.4, 6.6,   5.6  ],
    [ 0.9, 0.1, 5.2,  9.2, 11.1, 14.4, 15.5, 16.6, 13.6, 10.39,4.9,   6.7  ],
    [ 4.9, 6.1, 6.5, 10.5, 11.8, 14.4, 16.4, 16.1, 13.3, 10.60,6.3,   3.5  ],
    [ 5.8, 3.6, 5.2, 10.2, 11.4, 13.5, 16.5, 17.0, 12.5, 9.3,  6.2,   3.6  ],
    [ 0.4, 7.1, 7.9, 10.1, 12.2, 14.6, 16.7, 15.9, 14.4, 11.95,7.2,   4.9  ],
    [ 2.7, 5.9, 5.1,  9.9, 10.7, 13.1, 16.3, 14.7, 14.0, 9.8,  8.1,   3.1  ],
    [ 2.2,-1.9, 3.6,  8.6, 13.5, 15.5, 17.0, 18.6, 14.9, 10.6, 7.2,   5.1  ],
    [ 5.4, 4.7, 8.3,  9.0, 11.4, 13.5, 15.8, 15.1, 13.8, 10.14,7.3,   5.7  ],
    [ 5.5, 5.7, 5.1, 10.0, 11.2, 15.3, 17.4, 16.8, 16.3, 11.7, 6.6,   5.8  ],
    [ 4.2, 5.3, 7.4,  7.6, 11.3, 16.2, 15.9, 15.6, 12.9, 9.60, 5.7,   1.2  ],
    [ 3.9, 3.7, 4.1,  6.8, 10.1, 14.0, 16.3, 14.8, 14.1, 9.4,  8.5,   5.5  ],
    [ 2.7, 3.4, 6.6,  9.6, 13.4, 14.4, 16.8, 15.8, 10.7, 8.8,  4.2,   2.8  ],
    [ 3.3, 4.3, 5.6,  7.3, 12.6, 14.4, 15.5, 16.2, 13.8, 9.7,  8.5,   6.9  ],
    [ 2.9, 2.6, 5.8,  7.6, 11.2, 13.4, 14.2, 14.6, 12.7, 11.9, 6.9,   6.8  ],
    [ 2.6, 1.2, 3.2,  9.3,  9.7, 13.8, 17.7, 18.1, 14.2, 9.2,  7.0,   5.4  ],
    [ 3.6,-0.2, 6.2,  6.9, 11.7, 13.1, 15.8, 13.5, 14.3, 9.4,  6.0,   5.7  ],
    [ 5.5, 5.3, 9.2,  8.9, 10.3, 15.2, 16.3, 15.4, 12.5, 10.8, 6.4,   4.5  ],
    [ 3.4, 4.7, 3.7,  7.4, 11.1, 14.1, 15.9, 15.8, 15.1, 10.8, 6.4,   4.7  ],
    [ 1.6, 4.4, 7.3,  9.4, 12.8, 15.2, 17.3, 17.2, 14.9, 12.6, 7.1,   6.0  ],
    [ 3.8, 4.1, 6.4,  8.9, 12.8, 16.1, 15.1, 15.0, 13.1, 10.3, 7.3,   3.9  ],
    [ 3.9, 6.9, 8.2, 10.0, 11.0, 14.4, 15.2, 15.4, 15.2, 10.9, 6.0,   2.2  ],
    [ 4.3, 4.4, 2.8,  7.7, 10.3, 13.7, 15.1, 14.5, 12.6, 10.39,5.5,   1.8  ],
    [-2.1,-0.7, 6.0,  8.7, 10.6, 14.9, 15.2, 14.3, 12.9, 11.15,8.2,   2.6  ],
    [ 3.4, 4.5, 4.3,  8.7, 13.3, 13.8, 16.1, 15.5, 14.1, 8.9,  7.4,   3.6  ],
    [ 3.3, 3.1, 5.2,  8.0, 11.7, 14.7, 14.0, 14.9, 12.3, 11,   4.5,   4.7  ],
    [ 2.9, 5.7, 6.5,  7.2, 11.0, 15.4, 15.0, 14.7, 13.8, 10.1, 5.6,   5.5  ],
    [ 4.5, 5.4, 7.0,  7.7, 10.4, 14.0, 16.7, 15.7, 13.5, 10.8, 5.4,   4.2  ],
    [ 4.4, 1.9, 6.3,  8.1,  9.8, 14.8, 15.0, 15.4, 13.9, 12.5, 6.5,   3.0  ],
    [ 5.5, 1.0, 3.3,  7.4, 11.2, 13.9, 16.8, 16.4, 13.9, 13,   5.4,   3.3  ],
    [ 3.7, 2.9, 3.7,  6.7, 13.0, 16.4, 15.2, 16.0, 14.4, 10.7, 7.8,   4.3  ],
    [ 4.5, 4.5, 4.9,  7.9, 11.6, 12.4, 16.9, 15.6, 14.0, 11.3, 6.0,   6.6  ],
    [ 3.9, 4.3, 6.5,  8.2, 10.5, 11.8, 15.6, 15.1, 11.7, 10.6, 6.3,   5.8  ],
    [ 4.5, 4.3, 6.2,  7.0, 11.4, 14.8, 15.6, 16.5, 14.3, 9,    6.0,   4.9  ],
    [ 5.9, 5.4, 5.8,  8.2, 11.0, 13.9, 15.2, 15.2, 12.1, 7.8,  6.8,   8.1  ],
    [ 6.8, 4.4, 4.8,  8.3,  9.9, 14.7, 17.4, 18.7, 13.5, 9.85, 6.3,   5.3  ],
    [ 5.9, 4.5, 4.8,  8.1, 12.1, 17.0, 18.7, 17.6, 13.4, 10.6, 6.3,   2.0  ],
    [ 2.8, 5.2, 6.9,  7.2, 10.6, 12.2, 15.9, 15.2, 13.3, 11.75,6.6,   6.1  ],
    [ 3.4, 2.8, 6.7,  6.5, 11.7, 13.7, 14.8, 15.0, 14.2, 11.9, 8.5,   3.9  ],
    [-0.4, 1.2, 4.7,  7.8, 10.0, 13.9, 16.2, 14.9, 13.5, 11.35,6.8,   5.8  ],
    [ 2.3, 5.7, 4.7,  8.8, 11.2, 13.8, 14.7, 15.9, 14.7, 9.05, 6.6,   5.6  ],
    [ 4.9, 3.0, 7.9,  7.8, 11.2, 13.2, 15.5, 16.2, 14.5, 8.55, 7.8,   0.3  ],
    [ 2.6, 4.8, 6.1,  8.6, 11.6, 15.5, 16.5, 15.7, 14.2, 10.05,8.0,   4.4  ],
    [ 6.7, 1.7, 6.4,  6.8, 10.3, 14.4, 19.5, 17.3, 13.7, 10.45,7.5,   5.6  ],
    [ 3.8, 3.3, 4.7,  8.1,  9.9, 14.5, 16.9, 17.6, 13.7, 11.1, 8.0,   5.2  ],
    [ 0.8, 2.1, 4.7,  8.3, 10.9, 12.7, 16.2, 14.6, 14.6, 10.95,4.1,   6.3  ],
    [ 3.5,-1.1, 4.9,  5.8, 11.1, 14.8, 15.9, 13.7, 11.3, 11,   7.8,   6.2  ],
    [ 0.8, 3.6, 4.1, 10.3, 10.1, 12.8, 15.9, 15.6, 13.6, 9.7,  6.5,   5.6  ],
    [ 5.3, 4.9, 6.4,  8.2, 11.9, 14.4, 14.7, 15.2, 13.2, 10.39,5.2,   7.5  ],
    [ 6.1, 5.9, 7.5,  6.6, 13.0, 14.6, 18.2, 16.6, 14.7, 11.7, 6.2,   4.9  ],
    [ 6.5, 7.3, 8.3,  8.0, 12.6, 13.6, 16.9, 18.0, 13.2, 11.85,6.9,   4.3  ],
    [ 3.3, 1.5, 7.9,  7.9, 10.8, 12.1, 17.3, 17.1, 14.7, 10.2, 6.8,   4.7  ],
    [ 3.7, 5.4, 7.5,  8.7, 13.6, 15.7, 16.2, 15.3, 13.4, 7.8,  7.4,   3.6  ],
    [ 5.9, 4.6, 6.7,  9.5, 11.4, 15.0, 15.2, 14.6, 12.4, 8.45, 4.6,   5.5  ],
    [ 5.3, 3.2, 7.7,  8.1, 10.7, 14.5, 18.0, 16.0, 12.7, 10.2, 0.1,   6.4  ],
    [ 4.8, 6.5, 5.6,  9.1, 11.6, 14.3, 18.6, 19.2, 13.7, 12.9, 7.7,   2.3  ],
    [ 4.3, 2.5, 4.5,  8.5,  9.1, 14.4, 16.5, 16.5, 13.6, 11.65,5.9,   2.9  ],
    [ 2.5, 6.7, 8.4,  9.0, 11.5, 14.1, 16.7, 18.9, 14.2, 10.25,8.4,   5.8  ],
    [ 5.2, 7.3, 7.9,  7.7, 13.1, 14.2, 15.5, 15.9, 14.9, 10.64,6.2,   5.5  ],
    [ 5.5, 5.3, 7.4,  9.4, 12.9, 13.9, 17.7, 16.1, 15.6, 10.7, 7.9,   5.0  ],
    [ 4.9, 6.3, 7.6,  7.8, 12.1, 15.1, 15.5, 16.6, 14.7, 10.3, 7.0,   5.8  ],
    [ 3.2, 4.4, 5.2,  7.7, 12.6, 14.3, 17.2, 16.8, 13.4, 13.29,7.5,   3.6  ],
    [ 5.5, 7.0, 7.6,  9.3, 11.8, 14.4, 16.0, 17.0, 14.4, 10.1, 8.5,   5.7  ],
    [ 4.5, 3.9, 7.5,  9.6, 12.1, 16.1, 17.6, 18.3, 14.3, 9.25, 8.1,   4.8  ],
    [ 5.2, 5.4, 6.5,  9.4, 12.1, 15.3, 15.8, 17.6, 14.9, 10.5, 7.7,   5.4  ],
    [ 6.0, 4.3, 7.2,  8.9, 11.4, 15.5, 16.9, 16.2, 15.2, 13.1, 6.2,   4.4  ],
    [ 4.3, 3.7, 4.9,  8.6, 12.3, 15.9, 19.7, 16.1, 16.8, 13.05,8.1,   6.5  ],
    [ 7.0, 5.8, 7.2, 11.2, 11.9, 15.1, 15.2, 15.4, 13.8, 10.85,7.3,   4.9  ],
    [ 6.6, 5.4, 6.1,  7.9, 13.4, 13.9, 16.2, 16.2, 13.5, 9.65, 7.0,   3.5  ],
    [ 3.0, 4.1, 7.0, 10.0, 12.1, 14.8, 16.1, 16.6, 14.2, 11.55,8.7,   3.1  ],
    [ 1.4, 2.8, 6.1,  8.8, 10.7, 15.2, 17.1, 15.3, 13.8, 10.35,5.2,  -0.7  ],
    [ 3.7, 6.4, 6.7, 11.8, 12.2, 13.8, 15.2, 15.4, 15.1, 12.65,9.6,   6.0  ],
    [ 5.4, 3.8, 8.3,  7.2, 11.7, 13.5, 15.5, 16.6, 13.0, 9.65, 6.8,   4.8  ],
    [ 3.5, 3.2, 2.7,  7.5, 10.4, 13.6, 18.3, 16.9, 13.7, 12.5, 6.2,   6.3  ],
    [ 5.7, 6.2, 7.6, 10.2, 12.2, 15.1, 17.7,  -99,  -99, -99.9, 99.9, 99.9]
];

var meanTempMarch = 6.9;
var meanFutureTempMarch = 10.6;

//Temperatures
var ARCTIC = -7;
var FREEZING = -4;
var COLD = 0;
var MILD = 15;
var WARM = 20;
var HOT = 25;
var HEATWAVE = 200;
var tempRanges = [HEATWAVE, HOT, WARM, MILD, COLD, FREEZING, ARCTIC];

var remoteURL = 'http://www.timestreams.org.uk/wp-content/plugins/timestreams/2/';

function parseParams(param, paramText) {
    //Parse text for required parameters
    param += '=';
    var index = paramText.indexOf(param);
    console.log('Index =', index);
    if(index >= 0) {
        index += param.length;
        var data = parseInt(paramText.substr(index));
        if(isNaN(data)) {
            return null
        } else {
            return data;
        }
    }

    return null;
}

function parseTextParams(param, paramText) {
    //Parse text for required parameters
    param += '=';
    var index = paramText.indexOf(param);
    console.log('Index =', index);
    if(index >= 0) {
        index += param.length;
        return paramText.substr(index);
    }

    return null;
}

function getValue(response) {
    //Get temperature value from response
    var data = JSON.parse(response);
    if(data.data.length == 0) return null;

    console.log("Data =", data.data[0].value);

    return data.data[0].value;
}

function updateTempImage(value, container) {
    //Display image according to temperature
    var temp = null;
    if(value != null) {
        for(var i=0; i<tempRanges.length; ++i) {
            if(value > tempRanges[i]) {
                temp = tempRanges[i];
                break;
            }
        }
    }

    var image = $('#'+container+'Image');
    switch(temp) {
        case HEATWAVE:
            image.attr('src', 'images/heatwave_sketch.png');
            break;
        case HOT:
            image.attr('src', 'images/hot_sketch.png');
            break;
        case WARM:
            image.attr('src', 'images/warm_sketch.png');
            break;
        case MILD:
            image.attr('src', 'images/mild_sketch.png');
            break;
        case COLD:
            image.attr('src', 'images/cold_sketch.png');
            break;
        case FREEZING:
            image.attr('src', 'images/freezing_sketch.png');
            break;
        case ARCTIC:
            image.attr('src', 'images/arctic_sketch.png');
            break;
        case null:
            image.attr('src', 'images/error.png');
            break;
        default:
            console.log('Invalid temperature');
            break;
    }
}

function getTimestreamData(dob, code, measure, container) {
    //Get timestream data

    //Construct http request
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 )
        {
            if ( xmlHttp.responseText == "Not found" )
            {
                console.log('Not found');
            }
            else
            {
                console.log('response =', xmlHttp.responseText);
                var value = getValue(xmlHttp.responseText);
                var output = $('#'+container);
                if(value === null) {
                    //Use mean temp value
                    value = container.indexOf('Present') >= 0 ? meanTempMarch : meanFutureTempMarch;
                }
                output.html(value);
                //Update temperature image if required
                if(container.indexOf('temperature') >= 0) {
                    updateTempImage(value, container);
                }
            }
        }
    };

    //Check for data 16 minutes either side
    var diff = 16 * 60;

    //code += timeOffset;
    var min = code - diff;
    var max = code + diff;

    var publicKey = 'c9bcd7f338';
    var timeStamp = Math.round(Date.now() / 1000);
    var cmd = remoteURL + measure + '?pubkey=' + publicKey + '&now=' + timeStamp + '&min='+min + '&max='+max;
    //DEBUG
    console.log('Cmd =', cmd);

    xmlHttp.open( "GET", cmd, true );

    xmlHttp.send( null );
}

function sendTimestreamData(text, measure) {
    //Construct http request

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            if (xmlHttp.responseText == "Not found") {
                console.log('Not found');
            }
            else {
                console.log('response =', xmlHttp.responseText);
            }
        }
    };

    var publicKey = 'c9bcd7f338';
    var timeStamp = Math.round(Date.now() / 1000);
    var url = remoteURL + measure;
    //DEBUG
    console.log('URL =', url);

    xmlHttp.open( "POST", url, true );
    xmlHttp.setRequestHeader("Accept","application/json");
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var cmd = 'value='+text+'&pubkey='+publicKey+'&now='+timeStamp;

    //DEBUG
    console.log("cmd =", cmd);
    xmlHttp.send( cmd );

    /*
     var url = remoteURL + measure;
     var publicKey = 'c9bcd7f338';
     var timeStamp = Math.round(Date.now() / 1000);
     var cmd = encodeURIComponent("pubkey="+publicKey+"&now="+timeStamp+"&value=tony");
     $.ajax({
     type: "POST",
     url: url,
     data: cmd,
     success: function(data, textStatus, jqXHR) {
     console.log('Success');
     },
     error: function(jqXHR, textStatus, errorThrown) {
     console.log("Error occurred");
     }
     }
     )
     */
}

function getPastData(code, birthYear) {
    //Populate page with past temperature data
    //Get month from code
    var date = new Date(code*1000);
    var month = date.getMonth();

    var monthData = meanMonthlyTemps[birthYear-minYear];
    if(month <0 || month >= monthData.length) {
        console.log("Error parsing month");
        return;
    }
    var temp = monthData[month];

    //Get month
    var currentMonth = monthNames[month];

    var output = $('#temperaturePast');
    output.html(temp);

    updateTempImage(temp, 'temperaturePast');

    output = $('#pastDate');
    output.html(monthNames[month]+' '+birthYear);
}

$(document).ready(function() {
    //Only stay on page fixed time
    var timeOut_s = 90;
    setTimeout(function() {
        window.open('promises.html', '_self');
    }, timeOut_s * 1000);

    var measurements = ['measurement_container/wp_ekx42t_1_ts_temperature_16', 'measurement_container/wp_ekx42t_1_ts_precipitation_5',
        'measurement_container/wp_ekx42t_1_ts_temperature_19', 'measurement/wp_ekx42t_1_ts_messages_24', 'measurement/wp_ekx42t_1_ts_messages_25'];
    var dob = sessionStorage.dob;
    console.log('DOB =', dob);

    var code = sessionStorage.code;
    console.log('Code =', code);

    var predictText = sessionStorage.predict;
    console.log('PredictText =', predictText);

    if(dob!= null && code!=null) {
        getTimestreamData(dob, code, measurements[0], 'temperaturePresent');
        getTimestreamData(dob, code, measurements[2], 'temperatureFuture');
        sendTimestreamData(predictText, measurements[3]);
        sendTimestreamData(sessionStorage.q1, measurements[4]);
        sendTimestreamData(sessionStorage.q2, measurements[4]);
        getPastData(code, dob);
    }

});
