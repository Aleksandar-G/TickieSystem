package com.tickieSystem.tickieSystem.factories;

import com.tickieSystem.tickieSystem.db.IDataAccessLayer;
import com.tickieSystem.tickieSystem.db.db;
import com.tickieSystem.tickieSystem.db.mockdb;

public class DataBaseFactory {

    public DataBaseFactory(){
    }

    public static IDataAccessLayer GetDatabase(String database){
         IDataAccessLayer db = null;
            if (database.equals("remote")){
                //TO DO
            }
            else if (database.equals("mock1")){
                db = new db();
            }
            else if(database.equals("mock2")){
                db = new mockdb();
            }
            else{
                throw new IllegalArgumentException("NO such database");
            }

            return db;
    }
}
