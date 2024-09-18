const ENGINE_DB = <string>process.env.ENGINE_DB;

const getProperties = () => {
    const data:any = {
        nosql:{
            id:<string>'_id'
        },
        mysql:{
            id:<string>'id'
        }
    };
    return data[ENGINE_DB];
}

export { getProperties };