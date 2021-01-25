package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class Controller {
    Calculator calculator = new Calculator();

    @GetMapping("/double")
    public String Mydouble(@RequestParam(name="OperantOne") String first ,@RequestParam(name="Operation") String OP,@RequestParam(name="OperantTwo") String second){
        System.out.println(first);
        System.out.println(second);
        System.out.println(OP);
        return calculator.DoubleOperant(first,OP,second);
    }

    @GetMapping("/single")
    public String MySingle(@RequestParam(name="OperantOne") String first ,@RequestParam(name="Operation") String OP){
        System.out.println(first);
        System.out.println(OP);
        return calculator.SingleOperant(first,OP);

    }



}
