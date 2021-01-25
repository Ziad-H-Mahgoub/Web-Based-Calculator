package com.example.demo;

public class Calculator {

/////////////////////////////////////////double operants//////////////////////////////////////////////////////////////
    public String DoubleOperant (String one , String OP , String two){
        String result = "";
        switch (OP){
            case "+":
                result =AddFunction(one , two);
                break;
            case "-":
                result=SubtractFunction(one , two);
                break;
            case "*":
                result=TimesFunction(one , two);
                break;
            case "÷":
                result=DividedFunction(one , two);
                break;
        }
        return result;
    }

    public String AddFunction (String one , String two){
        double first =  Double.parseDouble(one);
        double second = Double.parseDouble(two);
        double result = first+second;
        return Double.toString(result);
    }
    public String SubtractFunction (String one , String two){
        double first =  Double.parseDouble(one);
        double second = Double.parseDouble(two);
        double result = first-second;
        return Double.toString(result);
    }
    public String TimesFunction (String one , String two){
        double first =  Double.parseDouble(one);
        double second = Double.parseDouble(two);
        double result = first*second;
        return Double.toString(result);
    }
    public String DividedFunction (String one , String two){
        double first =  Double.parseDouble(one);
        double second = Double.parseDouble(two);
        if (two=="0")
            return "E";
        else {
            double result = first / second;
            if(Double.toString(result)=="Infinity")
                return "E";
            return Double.toString(result);
        }
    }

    ////////////////////////////////////////////////Single operant///////////////////////////////////////////////////////

    public String SingleOperant (String one , String OP ){
        String result = "";
        switch (OP){
            case "percent":
                result =percentage(one);
                break;
            case "/":
                result=inverse(one);
                break;
            case "sqr":
                result=square(one);
                break;
            case "√":
                result=root(one);
                break;
        }
        return result;
    }

    public String percentage(String one){
        double first =  Double.parseDouble(one);
        double result =first*0.01;
        return Double.toString(result);
    }

    public String inverse(String one){
        double first =  Double.parseDouble(one);
        double result =1/first;
        return Double.toString(result);
    }

    public String square(String one){
        double first =  Double.parseDouble(one);
        double result =first*first;
        return Double.toString(result);
    }

    public String root(String one){
        double first =  Double.parseDouble(one);
        double result =Math.sqrt(first);
        if(Double.toString(result)=="NaN")
            return "E";
        return Double.toString(result);
    }





















}
