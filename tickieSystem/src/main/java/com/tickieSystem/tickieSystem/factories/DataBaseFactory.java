package com.tickieSystem.tickieSystem.factories;

import com.tickieSystem.tickieSystem.db.IDataAccessLayer;
import com.tickieSystem.tickieSystem.db.db;

import javax.validation.constraints.NotNull;

public class DataBaseFactory {

    public DataBaseFactory(){
    }
@NotNull
    public static IDataAccessLayer GetDatabase(String database){
         IDataAccessLayer db = new db();
            if (database.equals("remote")){
                //TO DO
            }
            else if (database.equals("mock1")){
                db = new db();
            }
            else if(database.equals("mock2")){

            }
            else{
                throw new IllegalArgumentException("NO such database");
            }

            return db;
    }
}
