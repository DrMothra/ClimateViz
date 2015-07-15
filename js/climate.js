/**
 * Created by DrTone on 28/08/2014.
 */

//Temperature data

var maxYearly =
    [
        {"1914" : 13.69},
        {"1915" : 12.68},
        {"1916" : 12.70},
        {"1917" : 12.07},
        {"1918" : 13.16},
        {"1919" : 12.14},
        {"1920" : 12.99},
        {"1921" : 14.41},
        {"1922" : 12.18},
        {"1923" : 12.46},
        {"1924" : 12.52},
        {"1925" : 12.69},
        {"1926" : 13.12},
        {"1927" : 12.43},
        {"1928" : 13.23},
        {"1929" : 12.91},
        {"1930" : 12.74},
        {"1931" : 12.34},
        {"1932" : 12.82},
        {"1933" : 13.68},
        {"1934" : 13.78},
        {"1935" : 13.31},
        {"1936" : 12.79},
        {"1937" : 13.05},
        {"1938" : 13.84},
        {"1939" : 13.20},
        {"1940" : 12.95},
        {"1941" : 12.61},
        {"1942" : 12.68},
        {"1943" : 13.81},
        {"1944" : 13.20},
        {"1945" : 13.90},
        {"1946" : 12.99},
        {"1947" : 13.24},
        {"1948" : 13.72},
        {"1949" : 14.60},
        {"1950" : 12.89},
        {"1951" : 12.76},
        {"1952" : 12.69},
        {"1953" : 13.52},
        {"1954" : 12.62},
        {"1955" : 13.15},
        {"1956" : 12.44},
        {"1957" : 13.68},
        {"1958" : 12.85},
        {"1959" : 14.60},
        {"1960" : 13.34},
        {"1961" : 13.72},
        {"1962" : 12.15},
        {"1963" : 12.02},
        {"1964" : 13.12},
        {"1965" : 12.50},
        {"1966" : 12.84},
        {"1967" : 13.00},
        {"1968" : 12.62},
        {"1969" : 12.77},
        {"1970" : 13.19},
        {"1971" : 13.36},
        {"1972" : 12.68},
        {"1973" : 13.28},
        {"1974" : 13.15},
        {"1975" : 13.83},
        {"1976" : 13.93},
        {"1977" : 12.87},
        {"1978" : 12.88},
        {"1979" : 12.33},
        {"1980" : 12.96},
        {"1981" : 12.75},
        {"1982" : 13.54},
        {"1983" : 13.61},
        {"1984" : 13.54},
        {"1985" : 12.33},
        {"1986" : 12.29},
        {"1987" : 12.45},
        {"1988" : 13.28},
        {"1989" : 14.45},
        {"1990" : 14.56},
        {"1991" : 13.21},
        {"1992" : 13.47},
        {"1993" : 12.99},
        {"1994" : 13.76},
        {"1995" : 14.42},
        {"1996" : 12.87},
        {"1997" : 14.36},
        {"1998" : 13.93},
        {"1999" : 14.40},
        {"2000" : 13.90},
        {"2001" : 13.65},
        {"2002" : 14.33},
        {"2003" : 14.80},
        {"2004" : 14.08},
        {"2005" : 14.21},
        {"2006" : 14.52},
        {"2007" : 14.20},
        {"2008" : 13.60},
        {"2009" : 13.82},
        {"2010" : 12.60},
        {"2011" : 14.53},
        {"2012" : 13.41},
        {"2013" : 13.25},
        {"2014" : 0.1}
    ];

var minYearly =
    [
        {"1914" : 6.08},
        {"1915" : 5.19},
        {"1916" : 5.67},
        {"1917" : 4.95},
        {"1918" : 5.85},
        {"1919" : 4.82},
        {"1920" : 6.17},
        {"1921" : 6.53},
        {"1922" : 5.17},
        {"1923" : 5.71},
        {"1924" : 6.02},
        {"1925" : 5.65},
        {"1926" : 6.33},
        {"1927" : 5.98},
        {"1928" : 5.93},
        {"1929" : 5.12},
        {"1930" : 6.12},
        {"1931" : 5.65},
        {"1932" : 5.95},
        {"1933" : 5.99},
        {"1934" : 6.21},
        {"1935" : 6.12},
        {"1936" : 5.86},
        {"1937" : 6.09},
        {"1938" : 6.52},
        {"1939" : 6.16},
        {"1940" : 5.17},
        {"1941" : 5.58},
        {"1942" : 5.43},
        {"1943" : 6.27},
        {"1944" : 5.94},
        {"1945" : 6.66},
        {"1946" : 5.90},
        {"1947" : 5.91},
        {"1948" : 6.30},
        {"1949" : 6.64},
        {"1950" : 5.93},
        {"1951" : 5.77},
        {"1952" : 5.51},
        {"1953" : 6.18},
        {"1954" : 5.82},
        {"1955" : 5.43},
        {"1956" : 5.24},
        {"1957" : 6.37},
        {"1958" : 6.00},
        {"1959" : 6.37},
        {"1960" : 6.12},
        {"1961" : 6.17},
        {"1962" : 5.03},
        {"1963" : 4.93},
        {"1964" : 5.81},
        {"1965" : 5.39},
        {"1966" : 6.05},
        {"1967" : 6.21},
        {"1968" : 5.98},
        {"1969" : 5.75},
        {"1970" : 5.95},
        {"1971" : 6.00},
        {"1972" : 5.70},
        {"1973" : 5.80},
        {"1974" : 6.08},
        {"1975" : 6.16},
        {"1976" : 6.23},
        {"1977" : 6.08},
        {"1978" : 5.98},
        {"1979" : 5.29},
        {"1980" : 5.90},
        {"1981" : 5.72},
        {"1982" : 6.10},
        {"1983" : 6.44},
        {"1984" : 5.93},
        {"1985" : 5.37},
        {"1986" : 5.17},
        {"1987" : 5.63},
        {"1988" : 6.27},
        {"1989" : 6.52},
        {"1990" : 6.69},
        {"1991" : 5.82},
        {"1992" : 6.22},
        {"1993" : 5.95},
        {"1994" : 6.70},
        {"1995" : 6.58},
        {"1996" : 5.53},
        {"1997" : 6.65},
        {"1998" : 6.75},
        {"1999" : 6.85},
        {"2000" : 6.70},
        {"2001" : 6.21},
        {"2002" : 6.88},
        {"2003" : 6.22},
        {"2004" : 6.89},
        {"2005" : 6.68},
        {"2006" : 7.12},
        {"2007" : 6.75},
        {"2008" : 6.32},
        {"2009" : 6.41},
        {"2010" : 5.06},
        {"2011" : 6.88},
        {"2012" : 5.99},
        {"2013" : 5.88},
        {"2014" : 0.1}
    ];

var maxMonthyTemp = [
    5.2,
    5.3,
    9.4,
    12.7,
    15.4,
    17.1,
    16.7,
    17.7,
    16.3,
    14.6,
    9.8,
    8.8,
    5.3,
    3.8,
    6.9,
    13.6,
    13.5,
    17.8,
    23.6,
    23.5,
    18.1,
    13.4,
    10,
    8.5,
    6,
    3.6,
    10.3,
    11.5,
    16.8,
    16.6,
    19.2,
    16.9,
    18.1,
    12.9,
    8.9,
    7.9,
    8.5,
    8.4,
    12.7,
    13.1,
    15.2,
    21,
    19.4,
    18.9,
    15.3,
    13.9,
    8.9,
    7.4,
    5.9,
    7.7,
    7.2,
    11.5,
    15.1,
    17.9,
    19.6,
    19.9,
    19.1,
    13.2,
    9,
    6.7,
    4.7,
    7.9,
    11,
    13.4,
    18.6,
    20,
    21.9,
    22.2,
    20.9,
    17.4,
    10.1,
    8.2,
    6.4,
    7.1,
    9.5,
    13.3,
    17.9,
    21.7,
    19.1,
    18.8,
    16.8,
    13.1,
    9.7,
    6.1,
    5.9,
    9.7,
    12.2,
    13.6,
    15.2,
    18.6,
    18.2,
    18.7,
    19.1,
    13.8,
    8.9,
    4.6,
    7.1,
    7.2,
    6.1,
    11.2,
    13.7,
    17.9,
    17.9,
    17.4,
    15.8,
    13.9,
    8.1,
    4.9,
    0.9,
    2.8,
    9.5,
    11.8,
    14.3,
    19.4,
    19.2,
    17.1,
    16.7,
    13.8,
    10.1,
    5.5,
    6.1,
    7.1,
    6.8,
    12.2,
    17.6,
    16.8,
    18.9,
    19.3,
    18,
    12.6,
    9.8,
    6.4,
    5.7,
    5.9,
    9.5,
    11.8,
    15.3,
    18.9,
    17.1,
    18.7,
    15.3,
    15.1,
    7,
    6.9,
    5.4,
    8,
    9.5,
    10.1,
    15.4,
    19.2,
    18.1,
    18.6,
    17.5,
    12.9,
    8.2,
    7.8,
    6.7,
    7.9,
    9.9,
    10.9,
    14.1,
    19.3,
    20.6,
    19.2,
    17,
    13.3,
    7.9,
    6.7,
    7,
    4.7,
    9.7,
    12.7,
    13.5,
    19.3,
    18.5,
    19.5,
    17,
    15.1,
    8.8,
    5.3,
    7.6,
    3.1,
    6,
    11.5,
    14.8,
    18.8,
    20.8,
    19.7,
    17.7,
    16,
    7.7,
    5.7,
    6.5,
    5.6,
    6.8,
    10,
    17.9,
    21.9,
    18.1,
    20.1,
    17.7,
    14.1,
    10.3,
    6.7,
    6.9,
    7.4,
    8.2,
    11.8,
    16.1,
    15.7,
    21.5,
    19.1,
    18.7,
    15.2,
    9.1,
    9,
    6.2,
    7,
    10.1,
    11.4,
    14,
    15,
    19.7,
    18.6,
    15.4,
    14.3,
    9.1,
    8.7,
    6.7,
    7.3,
    10.2,
    10.4,
    15.4,
    19.7,
    19.4,
    20.6,
    17.7,
    12.6,
    8.8,
    7.7,
    8.7,
    8.1,
    9.4,
    13.2,
    15.1,
    17.8,
    18,
    19,
    15.2,
    10.2,
    9,
    10.5,
    9.4,
    7.7,
    7.7,
    11.5,
    14,
    19.4,
    21.1,
    23.2,
    16.8,
    13.5,
    9.3,
    7.6,
    8.2,
    7.4,
    8.2,
    11.9,
    15.5,
    21.3,
    22.9,
    23.2,
    16.7,
    13.4,
    8.7,
    4,
    5.2,
    7.3,
    10.1,
    10.2,
    15.2,
    16.7,
    19.6,
    19.3,
    16,
    14.9,
    8.6,
    8.1,
    5.5,
    5.4,
    9.9,
    10.1,
    16.7,
    16.8,
    17.7,
    17.8,
    16.8,
    14.8,
    11.1,
    6.2,
    2.7,
    3.9,
    7.4,
    11.1,
    13.4,
    18.2,
    19.4,
    18.4,
    16.8,
    14.6,
    9.7,
    7.7,
    4.8,
    8.3,
    7.5,
    13.2,
    16.6,
    17.3,
    18.3,
    19.1,
    17.9,
    12,
    9.1,
    8.5,
    7.2,
    6,
    10.7,
    11.5,
    15.5,
    16.6,
    18.4,
    20,
    18.1,
    11.2,
    10.3,
    3.2,
    6.4,
    8,
    9.4,
    12.9,
    16.5,
    19.3,
    20.9,
    18.9,
    18,
    13.1,
    10.1,
    7.1,
    9.2,
    4.8,
    8.8,
    10.1,
    13.6,
    18.1,
    24.3,
    21.8,
    16.5,
    13.3,
    10.3,
    8.4,
    6.2,
    6.5,
    7.5,
    13.5,
    15.1,
    18.2,
    21.8,
    22.9,
    16.4,
    14.2,
    10.2,
    8,
    3.9,
    5.8,
    8.2,
    11.5,
    14.9,
    16.5,
    19.9,
    17.7,
    18.2,
    14,
    6.8,
    8.6,
    5.9,
    2.1,
    8.4,
    9.4,
    14.9,
    19.4,
    18.5,
    16.6,
    15.4,
    13.9,
    10.8,
    8.9,
    3.7,
    7,
    7.4,
    14.4,
    14.2,
    15.8,
    19.1,
    18.6,
    16.9,
    12.8,
    8.9,
    8.4,
    7.8,
    7.4,
    9,
    12.1,
    16.6,
    19.2,
    17.8,
    18.8,
    15.9,
    13.6,
    8.7,
    9.8,
    9.1,
    9.2,
    10.8,
    10,
    17.7,
    19.4,
    22.2,
    20.1,
    18.1,
    14.5,
    9.7,
    7.1,
    9.3,
    10.1,
    11.7,
    12.4,
    17.7,
    17,
    21.3,
    21.9,
    16.2,
    14.5,
    9.3,
    6.7,
    6,
    5.7,
    11.3,
    11.9,
    14.8,
    15.6,
    21.6,
    21.4,
    19.5,
    13.4,
    9.7,
    8.1,
    6.2,
    9,
    10.4,
    12.3,
    18.7,
    20.8,
    19.6,
    18.7,
    16.7,
    10.6,
    10.3,
    6.2,
    8.8,
    7.5,
    10.1,
    13.6,
    15.5,
    19.1,
    18.2,
    18,
    16.1,
    11.8,
    7.5,
    7.6,
    7.7,
    5.8,
    10.5,
    11.9,
    14.6,
    18.1,
    22.7,
    19.4,
    15.7,
    13.8,
    12.4,
    9,
    7.6,
    9.3,
    8.9,
    13.1,
    16.2,
    18.7,
    23.8,
    24.6,
    17.5,
    16.4,
    10.7,
    5,
    6.4,
    5.9,
    7.7,
    12.9,
    13.5,
    18.7,
    20.3,
    21.1,
    17.4,
    14.7,
    9.1,
    5.9,
    6,
    9.9,
    12,
    12.9,
    16.7,
    17.9,
    21.1,
    23.5,
    17.3,
    13.7,
    11.1,
    8.6,
    7.8,
    10.9,
    11.2,
    11.2,
    17.6,
    17.3,
    18.2,
    19.5,
    18.2,
    13.4,
    9,
    8.4,
    8.3,
    8.1,
    10.4,
    13.4,
    17,
    17.8,
    22.4,
    20.3,
    19.8,
    14.4,
    10.6,
    7.6,
    7.8,
    9.4,
    10.8,
    11.9,
    17.1,
    18.8,
    19.4,
    20.5,
    18.3,
    13.3,
    9.5,
    7.7,
    5.9,
    7.3,
    8.5,
    11,
    17.5,
    18.1,
    21.3,
    20.6,
    16.4,
    16.5,
    10.8,
    6.9,
    8.7,
    10.1,
    11.3,
    13.9,
    15.8,
    18.3,
    19.5,
    20.5,
    18.5,
    13.5,
    11.1,
    7.5,
    7.6,
    7.8,
    12.6,
    14.8,
    16.1,
    20.5,
    21.4,
    22.1,
    18.9,
    12.9,
    11,
    7.6,
    8,
    8.5,
    10.3,
    13.3,
    16.8,
    19.1,
    19.2,
    21.3,
    18.3,
    13.6
];

var minMonthlyTemp = [
    -0.1,
    -0.5,
    2.2,
    3.3,
    7.2,
    9.6,
    10.2,
    10.9,
    8.8,
    8.5,
    2.9,
    4,
    -0.1,
    -2.2,
    -0.9,
    4.8,
    5.3,
    9.4,
    12.1,
    13,
    10,
    4.7,
    3.8,
    2.1,
    0.5,
    -3.1,
    2.6,
    2.1,
    6.9,
    9,
    12,
    9.7,
    10.7,
    5.2,
    2.8,
    3.1,
    1.9,
    1.7,
    6,
    4.5,
    5.9,
    9.4,
    12.5,
    11.5,
    9.1,
    7,
    3.7,
    1.3,
    0,
    1,
    0.4,
    3.4,
    7.2,
    9.8,
    11.8,
    12.1,
    11.7,
    7.8,
    3.3,
    1.5,
    -1.7,
    1.6,
    3.9,
    5.4,
    8.1,
    10.4,
    12.5,
    12.8,
    10.1,
    8.8,
    4.3,
    3.1,
    1.3,
    1,
    3.5,
    4.7,
    8.8,
    11.2,
    11.3,
    11.1,
    9.7,
    7.4,
    4.1,
    1,
    0.4,
    3.8,
    4.9,
    6.6,
    6.5,
    9.7,
    11.2,
    11.4,
    11.1,
    7.7,
    3.3,
    -0.8,
    0.9,
    1.6,
    -1.1,
    4,
    6.6,
    9.4,
    11.3,
    10.6,
    9.6,
    7.2,
    2.6,
    -0.7,
    -4.1,
    -2.9,
    2.8,
    5.1,
    6.6,
    10.8,
    11.2,
    10.9,
    9.2,
    7.6,
    5,
    0.4,
    1.1,
    1.9,
    1.7,
    5.5,
    9.5,
    10.2,
    12,
    11.3,
    9.6,
    5.4,
    4,
    -0.3,
    0.6,
    0.8,
    1.4,
    3.9,
    7.9,
    10.5,
    10.8,
    11,
    9.2,
    7.4,
    1.6,
    1.4,
    1,
    3.3,
    3.4,
    4.3,
    7.2,
    11.9,
    11.2,
    10.6,
    10,
    6.9,
    3,
    2.5,
    1.6,
    2.4,
    3.8,
    4.3,
    6.6,
    9.8,
    12.3,
    12.1,
    10.3,
    7.8,
    1.8,
    1.3,
    1.8,
    -0.8,
    2.7,
    4.2,
    6.1,
    10.9,
    11.2,
    12,
    11,
    9.7,
    4.1,
    0.9,
    3.1,
    -2.5,
    0.6,
    3.2,
    7.6,
    9.5,
    12.6,
    12.9,
    10.8,
    10.2,
    2.1,
    0.6,
    1.4,
    -0.1,
    0.3,
    3.2,
    9.1,
    11.9,
    11.5,
    12.2,
    11.1,
    7.1,
    5.2,
    2.3,
    2,
    2.2,
    2.1,
    4.4,
    7.5,
    9.1,
    12.8,
    11.8,
    10.1,
    8.4,
    2.9,
    4.4,
    1.9,
    2,
    2.9,
    5.2,
    7.2,
    8.4,
    11.7,
    11.5,
    8.1,
    7.6,
    3.5,
    2.9,
    2.2,
    1.7,
    2.7,
    3.2,
    7.8,
    10.7,
    12.2,
    12.4,
    10.9,
    6.1,
    3.4,
    2.1,
    3.2,
    3,
    2.6,
    4.5,
    7.4,
    9.9,
    11.4,
    11.5,
    8.7,
    5,
    3.9,
    5.4,
    4.1,
    1.1,
    1.8,
    4.6,
    6.1,
    9.8,
    13,
    13.8,
    9.1,
    6.8,
    3,
    3.2,
    3.6,
    2.5,
    1.7,
    4.6,
    8.1,
    12,
    13.7,
    12.5,
    9.7,
    7.9,
    3.3,
    0.1,
    0.3,
    2.3,
    4,
    3.8,
    6.5,
    8.6,
    12.1,
    11.7,
    10,
    8.8,
    3,
    4,
    1.2,
    0.4,
    3.3,
    3.6,
    7.9,
    10.1,
    11,
    12,
    10.5,
    9.1,
    5.4,
    1.1,
    -2.9,
    -0.7,
    1.9,
    4.4,
    5.9,
    10.4,
    12.1,
    11.4,
    9.4,
    8.6,
    3.3,
    3.3,
    -0.2,
    3,
    2,
    5.1,
    7.2,
    10.5,
    11.4,
    12.5,
    11.5,
    6.1,
    4.2,
    2.6,
    1.7,
    0.5,
    5.1,
    4.7,
    8.1,
    9.9,
    11.7,
    12.3,
    10.8,
    4.6,
    4.8,
    -2,
    0.2,
    1.9,
    2.9,
    4.7,
    7.2,
    11.8,
    12.5,
    12.1,
    10.5,
    7.6,
    5.6,
    1.6,
    3.6,
    -0.5,
    3.6,
    3.1,
    7.2,
    10.5,
    14.5,
    12.8,
    10.3,
    7.2,
    4.9,
    3.5,
    0.9,
    1,
    2.3,
    3.7,
    6.2,
    10.2,
    12.1,
    13.1,
    10.4,
    7.9,
    5.5,
    2.7,
    -1.7,
    0,
    1.2,
    5.2,
    7.7,
    8.9,
    12.8,
    11.6,
    11.5,
    8.2,
    1.3,
    3.7,
    0.8,
    -2.3,
    1.9,
    2.6,
    8,
    11,
    12.2,
    10.1,
    7.2,
    7.4,
    4.4,
    3.2,
    -1,
    0.9,
    1.4,
    6.7,
    6.4,
    9.3,
    12.6,
    12.3,
    9.7,
    6.6,
    4.3,
    3.6,
    2.8,
    1.8,
    2.8,
    4.9,
    7.5,
    10.4,
    11.3,
    11.1,
    9.7,
    7.1,
    1.7,
    4.5,
    3.5,
    2.6,
    3.3,
    2.8,
    8.1,
    9.8,
    13.3,
    11.5,
    10.2,
    8.3,
    3.1,
    1.2,
    3.6,
    4.3,
    4.7,
    3.6,
    7.9,
    10.3,
    11.7,
    13.3,
    8.8,
    8.7,
    4,
    1.1,
    -0.5,
    -1.5,
    4.6,
    4.2,
    7.1,
    8,
    13.6,
    12.1,
    9.9,
    7.4,
    3.6,
    2.4,
    0.7,
    2.5,
    4.3,
    4.8,
    8.8,
    11.1,
    12.1,
    11.1,
    9.9,
    4.5,
    3.6,
    0,
    2.2,
    2.3,
    3.4,
    5.9,
    7.1,
    10.4,
    11.2,
    9.9,
    8.9,
    4.6,
    1.1,
    1.8,
    1.8,
    0.3,
    3.8,
    4.2,
    6.8,
    10.3,
    12.6,
    11.6,
    8.9,
    6.3,
    7.6,
    3,
    1.3,
    2.8,
    1.5,
    5,
    7.1,
    10.4,
    14.1,
    13.8,
    9.7,
    9.3,
    4.8,
    -0.1,
    2.8,
    -0.9,
    2,
    4.9,
    5.2,
    9.5,
    11.5,
    12.6,
    9.8,
    8.3,
    2.4,
    0.4,
    0.4,
    3.4,
    4.4,
    4.9,
    7.1,
    10.2,
    12.5,
    14.1,
    10.7,
    6.3,
    6.1,
    3.2,
    2.4,
    4.8,
    4.8,
    4.6,
    9.1,
    10.7,
    12,
    12,
    11.3,
    7.6,
    3.5,
    1.9,
    2.4,
    2.6,
    4.5,
    6.2,
    9.5,
    10.3,
    13.3,
    12.7,
    11.9,
    7.7,
    4.5,
    1.8,
    2.3,
    3,
    4.2,
    4.6,
    8,
    11.1,
    11.7,
    12.7,
    11.2,
    7.2,
    4.4,
    2.9,
    0.8,
    0.8,
    2.1,
    3.9,
    8.4,
    10.3,
    12.9,
    12.6,
    10.3,
    10.3,
    4.5,
    -0.3,
    2.3,
    3.9,
    4,
    5.2,
    8.6,
    10.6,
    11.7,
    13.2,
    10.8,
    6.5,
    6.1,
    3.9,
    2.1,
    0.8,
    3.3,
    5.7,
    8.4,
    11.5,
    13.6,
    13.6,
    9.8,
    5.6,
    4.9,
    1.6,
    2.4,
    2.5,
    3.4,
    6.5,
    8,
    11.2,
    11.7,
    14,
    11.1,
    7.5
];

var remoteURL = 'http://www.timestreams.org.uk/wp-content/plugins/timestreams/2/';

var measurements = ['measurement_container/wp_ekx42t_1_ts_temperature_26', 'measurement_container/wp_ekx42t_1_ts_rainfall_27',
    'measurement_container/wp_ekx42t_1_ts_wind_speed_28', 'measurement/wp_ekx42t_1_ts_messages_24', 'measurement/wp_ekx42t_1_ts_messages_25'];

var NUM_STREAMS = 3;

//Init this app from base
function ClimateApp(containers) {
    BaseSmoothApp.call(this, containers);
}

ClimateApp.prototype = new BaseSmoothApp();

ClimateApp.prototype.init = function(container, iPad) {
    BaseSmoothApp.prototype.init.call(this, container);
    var i;
    this.lastValue = null;
    this.dataAvailable = false;

    this.dataStreams = [];
    var streamInfo;
    for(i=0; i<NUM_STREAMS; ++i) {
        streamInfo = {};
        streamInfo.dataAvailable = false;
        streamInfo.lastIndex = 0;
        streamInfo.bufferSize = 0;
        streamInfo.bufferData = [];
        this.dataStreams.push(streamInfo);
    }

    this.bufferData = [];
    this.bufferSize = 0;
    this.lastIndex = -1;
    this.renderMinMax = false;

    //Set up multiple stream graphs
    var multipleData = [
        { id: 'pastTempGraph', width: 0.85, height: 0.175, background: 'rgba(0,0,0,0)', line: '#000000', delay: 0, speed: 100, max: undefined, min: undefined, maxScale: 1.2, minScale: 1.2 }
    ];
    this.setMultipleData(multipleData);
    this.maxStreamNumber = this.timeSeries.length - 2;
    this.minStreamNumber = this.timeSeries.length - 1;
    //Get latest data
    for(i=0; i<NUM_STREAMS; ++i) {
        this.getTimestreamData(i, measurements[i], 0);
    }

    //Add text to canvas
    var canvas = document.getElementById("pastTempGraph");
    var ctx = canvas.getContext("2d");
    ctx.font="30px Georgia";
    ctx.fillStyle = '#000000';
    ctx.fillText("1954", 100, 30);

    var _this = this;
    setInterval(function() {
        var i, stream;
        for(i=0; i<NUM_STREAMS; ++i) {
            if(_this.dataStreams[i].lastIndex > 0) {
                _this.getTimestreamData(i, measurements[i], _this.dataStreams[i].lastIndex-100);
                _this.dataStreams[i].lastIndex = -1;
            }
        }

        _this.renderMinMax = false;
        for(stream=0; stream<NUM_STREAMS; ++stream) {
            if(_this.dataStreams[stream].dataAvailable) {
                _this.renderMinMax = true;
                for(i=_this.dataStreams[stream].bufferSize; i<_this.dataStreams[stream].bufferData.length; i+=2) {
                    _this.timeSeries[stream].append(new Date().getTime() + (i*1000), _this.dataStreams[stream].bufferData[i+1]);
                }
                _this.dataStreams[stream].bufferSize = _this.dataStreams[stream].bufferData.length;
                _this.dataStreams[stream].dataAvailable = false;
            }
        }

        if(_this.renderMinMax) {
            for(i=0; i<maxMonthyTemp.length; ++i) {
                _this.timeSeries[_this.maxStreamNumber].append(new Date().getTime() + (i*400), maxMonthyTemp[i]);
            }
            for(i=0; i<minMonthlyTemp.length; ++i) {
                _this.timeSeries[_this.minStreamNumber].append(new Date().getTime() + (i*400), minMonthlyTemp[i]);
            }
        }

    }, 1000);

};

ClimateApp.prototype.update = function() {
    //Perform any updates
    return;
    var i;
    BaseSmoothApp.prototype.update.call(this);

    if(this.dataAvailable) {
        for(i=this.bufferSize; i<this.bufferData.length; i+=2) {
            this.timeSeries[0].append(new Date().getTime(), Math.random());
        }
        this.bufferSize = this.bufferData.length;
        this.dataAvailable = false;
    }

};

ClimateApp.prototype.createScene = function() {

    //Init base createsScene

};

ClimateApp.prototype.getValues = function(streamId, response, measure) {
    //Get temperature value from response
    var buffer;
    var data = JSON.parse(response);
    var index = measure.indexOf('wp_');
    if(index >= 0) {
        measure = measure.substr(index, measure.length-1);
    } else {
        return null;
    }
    if(data[measure] != undefined) {
        buffer = data[measure];
        return buffer[0].id;
    } else {
        buffer = data.data;
    }

    //console.log("Data =", data.data[0].value);

    //console.log("Id =", buffer[0].id, buffer[0].value);

    for(var i=0; i<buffer.length; ++i) {
        this.dataStreams[streamId].bufferData.push(Date.parse(buffer[i].valid_time), buffer[i].value);
    }

    return 0;
};

ClimateApp.prototype.getTimestreamData = function(streamId, measure, offset) {
    //Get timestream data
    var _this = this;
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
                //DEBUG
                console.log('response =', xmlHttp.responseText);
                var value = _this.getValues(streamId, xmlHttp.responseText, measure);
                if(value != null) {
                    if(value > 0) {
                        _this.dataStreams[streamId].lastIndex = value;
                        //DEBUG
                        console.log("Stream ", streamId, " index ", value);
                    } else {
                        _this.dataStreams[streamId].dataAvailable = true;
                    }
                }
            }
        }
    };

    //Check for data 16 minutes either side
    var diff = 16 * 60;

    //code += timeOffset;
    //var min = code - diff;
    //var max = code + diff;

    var publicKey = 'c9bcd7f338';
    var timeStamp = Math.round(Date.now() / 1000);
    var fromTime = 60 * 100 * 5;
    var min = offset != 0 ? timeStamp - fromTime : null;
    var max = timeStamp;
    var cmd = remoteURL + measure + '?pubkey=' + publicKey + '&now=' + timeStamp;
    if(min === null) {
        cmd += '&action=latest';
    } else {
        cmd += '&min='+min + '&max='+max + '&limit=100';
    }

    //DEBUG
    console.log('Cmd =', cmd);

    xmlHttp.open( "GET", cmd, true );

    xmlHttp.send( null );
};

$(document).ready(function() {
    //Loop page after fixed time
    var pageRefreshTime = 240 * 1000;
    setInterval(function() {
        location.reload();
    }, pageRefreshTime);

    //Initialise app
    //Set up smoothie charts
    skel.init();
    var dataDelay = 0;
    var timeStreamCheckInterval = 1000;
    var charts = [
        { id: 'liveTempGraph', width: 0.85, height: 0.175, background: 'rgba(0,0,0,0)', line: '#000000', delay: dataDelay, max: 35, min: 10, maxScale: 1.2, minScale: 1.2 },
        { id: 'livePrecipGraph', width: 0.85, height: 0.175, background: 'rgba(0,0,0,0)', line: '#000000', delay: dataDelay, max: 25, min: -5, maxScale: 1.2, minScale: 1.2 },
        { id: 'windSpeedGraph', width: 0.85, height: 0.175, background: 'rgba(0,0,0,0)', line: '#000000', delay: dataDelay, max: undefined, min: -5, maxScale: 1.2, minScale: 1.2 }
    ];

    var smoothieApp = new ClimateApp(charts);
    //Set any params
    smoothieApp.setPixelDist(100);
    //smoothieApp.setLineDist(100);
    smoothieApp.setLineWidth(4);
    smoothieApp.setWaveDelay(dataDelay);
    smoothieApp.init();
    //smoothieApp.createScene();

    //Check timestreams periodically
    /*
    setInterval(function() {
            smoothieApp.getTimestreamData(measurements[0]);
    },
        timeStreamCheckInterval);
    */

    //smoothieApp.run();
});