export const units = [
    {
        title: "Unit I: Data Pre-Processing",
        youtube: "https://youtu.be/kE5QZ8G_78c?si=z1XhZAcvjHKnzKqp",
        quizlink: "",
        lessons: [
            { name: "Managing data with R", lessonkey: "managing_data_r" },
            { name: "Exploring and understanding data", lessonkey: "understanding_data" },
            { name: "Exploring the structure of data", lessonkey: "structure_of_data" },
            { name: "Exploring numeric variables", lessonkey: "exploring_numeric_variables" },
            { name: "Exploring categorical variables", lessonkey: "exploring_categorical_variables" },
            { name: "Exploring relationships between variables", lessonkey: "relationships_between_variables" }
        ]
    },
    {
        title: "Unit II: Supervised Learning: Classification",
        youtube: "https://youtu.be/kE5QZ8G_78c?si=z1XhZAcvjHKnzKqp",
        quizlink: "",
        lessons: [
            { name: "Lazy learning: Nearest neighbors", lessonkey: "lazy_learning_nearest_neighbors" },
            { name: "Probabilistic Learning: Using Naive Bayes", lessonkey: "probabilistic_learning_naive_bayes" },
            { name: "Divide and Conquer: Decision Trees and Rules", lessonkey: "decision_trees_and_rules" }
        ]
    },
    {
        title: "Unit III: Supervised Learning: Numeric Prediction",
        youtube: "https://youtu.be/BMhh4MO6mNI?si=Nt-YUkYz2xlhrgRa",
        quizlink: "",
        lessons: [
            { name: "Forecasting Numeric Data", lessonkey: "forecasting_numeric_data" },
            { name: "Simple Linear Regression", lessonkey: "simple_linear_regression" },
            { name: "Polynomial Regression", lessonkey: "polynomial_regression" },
            { name: "Ordinary least squares estimation", lessonkey: "ols_estimation" },
            { name: "Correlations", lessonkey: "correlations" }
        ]
    },
    {
        title: "Unit IV: Supervised Learning: Dual Use",
        youtube: "https://youtu.be/Xf-1gefbvSo?si=2FX1-6eJU28pqjxl",
        quizlink: "",
        lessons: [
            { name: "Black Box Methods", lessonkey: "black_box_methods" },
            { name: "Neural Networks", lessonkey: "neural_networks" },
            { name: "Support Vector Machines", lessonkey: "support_vector_machines" }
        ]
    },
    {
        title: "Unit V: Un-Supervised Learning: Clustering and Pattern Detection",
        youtube: "https://youtu.be/5FpsGnkbEpM?si=GWEea8vQxCQLRbJc",
        quizlink: "",
        lessons: [
            { name: "K-Means Clustering", lessonkey: "k_means_clustering" },
            { name: "K-means clustering intuition", lessonkey: "k_means_intuition" },
            { name: "K-means random initialization trap", lessonkey: "k_means_initialization_trap" },
            { name: "K-means selecting number of clusters", lessonkey: "k_means_selecting_clusters" },
            { name: "Dataset gathering", lessonkey: "dataset_gathering" },
            { name: "Hierarchical Clustering", lessonkey: "hierarchical_clustering" },
            { name: "Association Rules", lessonkey: "association_rules" },
            { name: "Finding Patterns", lessonkey: "finding_patterns" },
            { name: "Market Basket Analysis Using Association Rules", lessonkey: "market_basket_analysis" }
        ]
    },
    {
        title: "Unit VI: Model Performance",
        youtube: "https://youtu.be/dK99eo480eQ?si=AcakBGcJPwm7qp9L",
        quizlink: "",
        lessons: [
            { name: "Evaluation Model Performance", lessonkey: "evaluation_model_performance" },
            { name: "Improving Model Performance", lessonkey: "improving_model_performance" },
            { name: "Bagging", lessonkey: "bagging" },
            { name: "Boosting", lessonkey: "boosting" },
            { name: "Random forests", lessonkey: "random_forests" }
        ]
    }
];

export const lessonData = {
    "data_preprocessing": {
        title: "Unit I: Data Pre-Processing",
        description: "Learn how to preprocess data for machine learning by managing, exploring, and understanding data.",
        sections: [
            {
                title: "Managing data with R",
                content: "Learn how to handle and manipulate data using R. This includes importing data, cleaning missing values, and handling data types.",
                code: `
# Example: Importing a dataset and cleaning missing values in R
data <- read.csv('data.csv')  # Import dataset
data <- na.omit(data)         # Remove rows with missing values
summary(data)                  # Summarize the cleaned data`
            },
            {
                title: "Exploring and understanding data",
                content: "Explore datasets and understand the key properties of data, such as summary statistics and distributions.",
                code: `
# Example: Summary and distribution of data in R
summary(data)                  # Summary statistics
hist(data$variable)            # Histogram for a variable`
            },
            {
                title: "Exploring the structure of data",
                content: "Understand the structure of data through techniques like data visualization and summary statistics.",
                code: `
# Example: Checking the structure of the dataset in R
str(data)                      # Display structure of the dataset`
            },
            {
                title: "Exploring numeric variables",
                content: "Learn how to explore numeric variables using methods like descriptive statistics and visualizations.",
                code: `
# Example: Visualizing numeric data distribution in R
boxplot(data$numeric_variable, main="Boxplot of Numeric Variable")  # Boxplot for numeric data`
            },
            {
                title: "Exploring categorical variables",
                content: "Learn how to analyze categorical variables using frequency tables and bar charts.",
                code: `
# Example: Bar chart for categorical variables in R
barplot(table(data$category_variable), main="Category Distribution")  # Bar chart for categorical variable`
            },
            {
                title: "Exploring relationships between variables",
                content: "Examine the relationships between different variables through correlation and visualizations like scatter plots.",
                code: `
# Example: Scatter plot for relationship between two numeric variables in R
plot(data$numeric_var1, data$numeric_var2, main="Scatter Plot of Variables")`
            }
        ],
        pitfalls: [
            "Ensure proper handling of missing values to avoid biased analysis.",
            "Always check data types before applying machine learning algorithms."
        ],
        summary: "Data preprocessing is an essential step in machine learning to prepare data for analysis and model building.",
        practiceQuestions: [
            {
                question: "Import a dataset into R and perform basic cleaning on the data.",
                hint: "Use functions like read.csv() to load data and na.omit() to remove missing values."
            },
            {
                question: "Visualize the relationship between two numeric variables.",
                hint: "Use a scatter plot to visualize the relationship, e.g., plot(x, y)."
            }
        ]
    },
    "supervised_learning_classification": {
        title: "Unit II: Supervised Learning: Classification",
        description: "Learn about classification techniques in supervised learning, focusing on algorithms like k-nearest neighbors and decision trees.",
        sections: [
            {
                title: "Lazy learning: Nearest neighbors",
                content: "Understand the k-nearest neighbors algorithm, a non-parametric method used for classification.",
                code: `
# Example: KNN Classification in Python using scikit-learn
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split

# Prepare dataset
X = data.drop('target', axis=1)  # Features
y = data['target']               # Target variable

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# KNN classifier
knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X_train, y_train)
predictions = knn.predict(X_test)  # Make predictions`
            },
            {
                title: "Probabilistic Learning: Using Naive Bayes",
                content: "Learn about Naive Bayes classifiers, which apply Bayes' theorem with strong (naive) independence assumptions.",
                code: `
# Example: Naive Bayes Classification in Python using scikit-learn
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split

# Prepare dataset
X = data.drop('target', axis=1)  # Features
y = data['target']               # Target variable

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Naive Bayes classifier
nb = GaussianNB()
nb.fit(X_train, y_train)
predictions = nb.predict(X_test)  # Make predictions`
            },
            {
                title: "Divide and Conquer: Decision Trees and Rules",
                content: "Explore decision tree algorithms that partition data into subgroups based on feature values.",
                code: `
# Example: Decision Tree Classifier in Python using scikit-learn
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split

# Prepare dataset
X = data.drop('target', axis=1)  # Features
y = data['target']               # Target variable

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Decision tree classifier
tree = DecisionTreeClassifier()
tree.fit(X_train, y_train)
predictions = tree.predict(X_test)  # Make predictions`
            }
        ],
        pitfalls: [
            "KNN can be computationally expensive for large datasets.",
            "Naive Bayes assumes feature independence, which may not always hold true."
        ],
        summary: "Supervised learning classification methods help predict categorical outcomes by training a model on labeled data.",
        practiceQuestions: [
            {
                question: "Implement a k-nearest neighbors classifier on a sample dataset.",
                hint: "Use the KNeighborsClassifier from sklearn and set n_neighbors to a suitable value."
            },
            {
                question: "Train a Naive Bayes classifier on a text classification problem.",
                hint: "Use MultinomialNB from sklearn for text classification tasks."
            }
        ]
    },
    "supervised_learning_numeric_prediction": {
        title: "Unit III: Supervised Learning: Numeric Prediction",
        description: "Learn about numeric prediction using techniques like linear regression and polynomial regression.",
        sections: [
            {
                title: "Forecasting Numeric Data",
                content: "Understand how to predict continuous numeric outcomes using regression models.",
                code: `
# Example: Linear Regression in Python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Prepare dataset
X = data.drop('target', axis=1)  # Features
y = data['target']               # Target variable

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Linear regression model
regressor = LinearRegression()
regressor.fit(X_train, y_train)
predictions = regressor.predict(X_test)  # Make predictions`
            },
            {
                title: "Simple Linear Regression",
                content: "Learn the basics of linear regression and how to use it to model the relationship between two variables.",
                code: `
# Example: Simple Linear Regression in Python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Sample Data
X = np.array([[1], [2], [3], [4], [5]])  # Independent variable
y = np.array([1, 2, 3, 4, 5])            # Dependent variable

# Linear regression model
model = LinearRegression()
model.fit(X, y)

# Predict and plot
y_pred = model.predict(X)
plt.scatter(X, y)
plt.plot(X, y_pred, color='red')
plt.show()`
            },
            {
                title: "Polynomial Regression",
                content: "Explore polynomial regression to model non-linear relationships between variables.",
                code: `
# Example: Polynomial Regression in Python
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
import numpy as np
import matplotlib.pyplot as plt

# Sample Data
X = np.array([[1], [2], [3], [4], [5]])  # Independent variable
y = np.array([1, 4, 9, 16, 25])           # Dependent variable

# Polynomial features
poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

# Linear regression on polynomial features
model = LinearRegression()
model.fit(X_poly, y)

# Predict and plot
y_pred = model.predict(X_poly)
plt.scatter(X, y)
plt.plot(X, y_pred, color='red')
plt.show()`
            }
        ],
        pitfalls: [
            "Ensure that the relationship between variables is linear before applying linear regression.",
            "Avoid overfitting when using polynomial regression by selecting the correct degree."
        ],
        summary: "Numeric prediction methods allow you to forecast continuous outcomes based on historical data.",
        practiceQuestions: [
            {
                question: "Implement a linear regression model to predict a numeric target variable.",
                hint: "Use LinearRegression() from sklearn and fit the model to the training data."
            },
            {
                question: "Apply polynomial regression to model non-linear data.",
                hint: "Use PolynomialFeatures to create polynomial features and fit a linear model on those features."
            }
        ]
    }
};