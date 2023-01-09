

const development={
    nams:'development',
    asset_path:'./assets',
    db_name:"bug-tracker"  
}


const production={
    name:'production',
    asset_path:process.env.ERROR_TRACKER_ASSET_PATH,
    db_name:process.env.ERROR_TRACKER_DB_NAME
}





module.exports=development
