

const development={
    nams:'development',
    asset_path:'./assets',
}


const production={
    name:'production',
    asset_path:process.env.ERROR_TRACKER_ASSET_PATH,
}





module.exports=eval(process.env.ERROR_TRACKER_ENVIRONMENT)==undefined?development:eval(process.env.ERROR_TRACKER_ENVIRONMENT);
