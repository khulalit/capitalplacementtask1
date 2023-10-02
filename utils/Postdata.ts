export const PostData = async (data: any, metaData:any) => {
    try {
        const res = await fetch('http://127.0.0.1:4010/api/323.4529874507552/programs/similique/application-form', {
            method: 'put',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": '*',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({data: {id: metaData.id, type: metaData.type, attributes: data}})
        })
        console.log(res)
    } catch (error) {
        console.log(error)
    }

    

}