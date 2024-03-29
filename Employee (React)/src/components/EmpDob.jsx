function EmpDob(props) {
    if (!props.DOB) {
        console.log("Undefined dob");
    }

    const year = props.DOB.getFullYear();
    const month = props.DOB.toLocaleString('en-US', { month: 'long' });
    const day = props.DOB.toLocaleString('em-US', { day: '2-digit' });

    return (
        <div className=" flex gap-5 emp-date-box">
            <div className='emp-dob-day'>DOB - </div>
            <div className='emp-dob-day'>{day} </div>
            <div className='emp-dob-month'>/{month}</div>
            <div className='emp-dob-year'>/{year} </div>
        </div>
    )
}

export default EmpDob;
