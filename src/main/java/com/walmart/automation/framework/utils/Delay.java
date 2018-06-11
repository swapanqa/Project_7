package com.walmart.automation.framework.utils;

public class Delay {
    public void delayFor(int mili){
        try {
            Thread.sleep(mili);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
