# nba2k_coding_exercise
Welcome to the repository for the NBA 2K coding exercise! 

## Goal
Calculate the Overall Rating, Badge Efficiency, and Attribute Efficiency of each player archetype described in the input CSV file. The output you produce should roughly match what's seen in the following sheet: https://docs.google.com/spreadsheets/d/1yp3T-ndws_8xm6JOb6cBJSMbg_IbnTXn_Pj14i_kAWE/edit#gid=1863091399&range=A1

Through the exercise, you should utilize the following programming basics:
1. Reading data from CSV
2. Looping through data sets
3. String parsing
4. Implementing data structures
5. Basic math operations
6. Output to CSV
7. Git command line

## Getting Started
First, you should choose an IDE for simplicity. I recommend using Visual Studio Code: https://code.visualstudio.com/.

Next, you will need to set up the git repostory
1. Sign up for git hub and log in: https://github.com
2. Follow the VS Code git setup: https://code.visualstudio.com/docs/editor/github
- The name of the repository for setup is "nba2k_coding_exercise"
3. Open the repository

Once you're set up to use the git repository, get ready to start coding:
1. Open a terminal in VS Code
2. Check out a new branch using `git checkout -b branch_name`
3. Add a personal folder under "users" (e.g. users/michaelt)
4. Add your code to the user folder
5. Commit when desired
6. Push when desired

## Coding
Your code should parse the input.csv file in the `materials` folder, calculate the Overall Rating, Badge Efficiency, and Attribute Efficiency, and output the data in a .csv matching the format of the output.csv. Optional: Output timing metrics to track how long your calculations took to complete, in seconds.

### Formulae
Overall Rating
`Overall Rating Helper (Player) / Maximum Overall Rating Helper (All Players)`

Badge Efficiency
`Badge Efficiency Helper (Player) / Maximum Badge Efficiency Helper (All Players)`

Attribute Efficiency
`Attribute Efficiency Helper (Player) / Maximum Attribute Efficiency Helper (All Players)`

Overall Rating Helper
`(0.15 * (100 * (Total Initial Rating (Player) / Maximum Total Initial Rating (All Players) ))) + (0.6 * (100 * (Total Rating w/ Caps (Player) / Maximum Total Rating w/ Caps (All Players) )) + Badge Efficiency Helper (Player)`

Badge Efficiency Helper
`(5 * Count of HOF Badges) + (3 * Count of Gold Badges) + (2 * Count of Silver Badges) + (Count of Bronze Badges)`

Attribute Efficiency Helper
`(0.2 * (100 * (Total Initial Rating (Player) / Maximum Total Initial Rating (All Players) ))) + (0.8 * (100 * Total Rating w/ Caps (Player) / Maximum Total Rating w/ Caps (All Players) )))`

