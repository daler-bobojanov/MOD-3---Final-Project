package com.daler.mySBootProjectForAppYourSpace;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class MySBootProjectForAppYourSpaceApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(MySBootProjectForAppYourSpaceApplication.class, args);
	}
	
	 @Override
     protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
         return builder.sources(MySBootProjectForAppYourSpaceApplication.class);
     }

}
