---
layout: post
title: "Base rate fallacy"
description: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
comments: true
keywords: "blogging, writing"
---

Picture yourself in the year 2040. Cancer detection technology has become so inexpensive that there are drive-through stores where you can test for cancer and get immediate results. The test engineers designed it to have a recall of one to avoid false negatives, as they could be deadly to the person being tested. However, the high recall came at a cost of low precision, resulting in a 95 percent false positive rate. In other words, if you tested everyone without cancer, 5% of them would be labeled as having cancer.

Now, let's say you take the test and it shows you have cancer. You panic, then calm down to read the test specifications, which reveal a 100% false negative rate and a 95% false positive rate. You freak out again. This is a classic case of base rate fallacy, where you ignore the fact that cancer prevalence in the general population may be very low (let's assume 1%).

Let's use Bayes' rule to calculate your actual probability of having cancer.

$$ P(Cancer | positive\_test) = P(positive\_test | Cancer) * P(cancer) / [P(positive\_test | Cancer) * P(cancer) + P(positive\_test | no\_cancer) * P(no\_cancer)]$$

Assuming a 1% cancer prevalence in the population,

$$P(Cancer | positive\_test) = (1)(0.01)/(1\*0.01+0.05\*0.99) = 0.168$$

So, you actually have a 16% chance of having cancer. Not bad odds, huh? 

