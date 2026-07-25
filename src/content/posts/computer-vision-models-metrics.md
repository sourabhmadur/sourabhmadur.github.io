---
title: "Metrics for computer vision models"
pubDate: 2022-09-17
description: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
author: "Sai Sourabh Madur"
---
### IOU

IOU for a predicted bounding box and ground truth box is the area of intersection divided by area of union between the boxes.


### Average precision(AP)@IOU_threshold for a label in an eval dataset

Lets say the eval dataset has 10 images. Each image has an apple and we are trying to detect apples in images. Our model takes in an image and ouputs a bounding box for the apple with a confidence score. 

For every confidence threshold, we can filter out these predictions and get a filtered list of predictions. 

For this filtered list, we can calculate the precision and recall. If IOU for the sample>IOU_threshold, the sample is a true postive, and is a false positive otherwise. Every ground truth bounding boxes not in the true positives is considered a false negative. 


By varying the confidence threshold, we obtain a PR curve and the area under this PR curve is our average precision (AP).


### Mean Average Precision(MaP)@IOU_threshold for an eval dataset

Taking the mean for all the labels gives up MAP, which is the mean average precision at some IOU threshold. 


### Current SOTA for CV models 

https://medium.com/@pedroazevedo6/object-detection-state-of-the-art-2022-ad750e0f6003



References:

[1] https://arxiv.org/pdf/2207.02696v1.pdf

[2] https://jonathan-hui.medium.com/map-mean-average-precision-for-object-detection-45c121a31173




	


