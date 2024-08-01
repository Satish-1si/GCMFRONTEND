export const Columns = [
    {
        dataField: 'id',
        text: 'ID'
    },
    {
        dataField: 'name',
        text: 'Name'
    },
   
];

export const SecondTableCoumns=[
	{
        dataField: 'price',
        text: 'Price'
    },
    {
        dataField: 'nameInput',
        text: 'Name*',
        formatter: () => <input type="text" className="form-control" placeholder="Enter Name" required />
    },
   
]
export const ThridColumn=[
	{
        dataField: 'email',
        text: 'Email*',
        formatter: () => <input type="email" className="form-control" placeholder="Enter Email" required />
    },
	{
        dataField: 'mobile' ,
        text: 'Mobile*',
        formatter: () => <input type="text" className="form-control" placeholder="Enter Mobile" required />
    },
    
   
]
export const FourthColumn=[
	{
        dataField: 'username',
        text: 'Username (Tenant)*',
        formatter: () => <input type="text" className="form-control" placeholder="Select Tenant" required />
    },
	{
        dataField: 'extension',
        text: 'Extension No.*',
        formatter: () => <input type="text" className="form-control" placeholder="Enter Extension" required />
    },
]

export const FivthColumn=[
	{
        dataField: 'password',
        text: 'Password*',
        formatter: () => <input type="password" className="form-control" placeholder="Enter Password" required />
    },
	{
        dataField: 'confirmPassword',
        text: 'Confirm Password*',
        formatter: () => <input type="password" className="form-control" placeholder="Confirm Password" required />
    },
   
]
export const SixthColumn=[
	{
        dataField: 'permissions',
        text: 'Allow Permission*',
        formatter: () => (
            <div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="audioCall" />
                    <label className="form-check-label" htmlFor="audioCall">Audio Call</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="audioConference" />
                    <label className="form-check-label" htmlFor="audioConference">Audio Conference</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="gsmCall" />
                    <label className="form-check-label" htmlFor="gsmCall">GSM Call</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="videoCall" />
                    <label className="form-check-label" htmlFor="videoCall">Video Call</label>
                </div>
            </div>
        )
    }
]
