---
layout: post
title: "Precision and Recall"
description: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
comments: true
keywords: "blogging, writing"
---

Precision and recall are one of the most fundamental metrics in machine learning and having a good intuition for these metrics is really important for evaluating any of the fancy models.


### Confusion Matrix

The results of a classification models can be visualzed nealty by [Confusion matrix](https://en.wikipedia.org/wiki/Confusion_matrix).



### Precision
$Precision = tp/(tp+fp)$ 

- If all ofthe samples classified as postives are actually positive, precision is one. If some of them are actually negative, precision decreses.
- Precision penalizes false positives. 
- Any model which does a good/bad kind of a classification should have a high precision for the good label if the bad label is deadly i.e false positives cannot be tolerated.

### Recall

$Recall = tp/(tp+fn)$

- Out of all the positively labeled samples, how many did our model capture as true positives and how many did it miss out on(and classify as false negatives)?

- If recall is one, our model was able to classify all positively labelled samples correctly.


Here is a diagram summarizing precision and recall:

![diagram](https://en.wikipedia.org/wiki/Precision_and_recall#/media/File:Precisionrecall.svg)


### Real life applications and case studies


- Lets say the we are building a model to classify someone as guilty or not guilty. If found guilty, the person will be executed. The positive label here means the person is guilty. If we have false positives, i.e if we classify someone as guilty when they are not guilty, its very bad. We can afford some false negatives(i.e. let go of some criminals). In this case, we need high precision and can do away with ok recall.


- Lets say the we are building a model to detect fraud transactions. The positive label represents if a transaction was fraudulent. If we have false negatives, that means we have a few fraudulent transactions which we missed out on. The customer wouldn't be very happy with this. Flagging some legit transactions as fraud is ok as long as we have a zero tolerance policy for fraud transactions i.e our model captures all fraudulent transactions. 

- Let's say we have a model that predicts 1 if someone does not have AIDS and 0 otherwise. For the label 1, if we have a precision less than 1, then that means there are false positives, i.e we classify someone as healthy when in reality, they have AIDS. This is very bad. 


References:
[1] https://en.wikipedia.org/wiki/Confusion_matrix
[2] https://en.wikipedia.org/wiki/Precision_and_recall
[3] Real life usecases: https://medium.com/analytics-vidhya/precision-recall-tradeoff-for-real-world-use-cases-c6de4fabbcd0
[4] More by the above author : https://www.lavanya.dev/blog




	


