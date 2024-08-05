export const Columns=[
    {
        dataField:"Email",
        text:"Email",
    },
    ,
    {
        dataField:"PhoneNO",
        text:"Phone NO"
    },
    {
        dataField:"Extension",
        text:"Extension"
    },
    {
        dataField:"Password",
        text:"Password"
    },
    {
        dataField:"AllowPermissions",
        text:"Allow Permissions",
        formatter: () => <div class="dropdown  ">
        <a class="btn border border-dark dropdown-toggle dropdown-toggle-split mr-2" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Allow Permissions
        </a>
      
        <div class="dropdown-menu dropdown-toggle-split" aria-labelledby="dropdownMenuLink">
          <h6 class="dropdown-item active" href="#">Audio Calls</h6>
          <h6 class="dropdown-item active" href="#">Veido Calls</h6>
          <h6 class="dropdown-item " href="#">Audio Conference</h6>
          <h6 class="dropdown-item active" href="#">Gsm Calls</h6>
        </div>
      </div>
    },
    {
        dataField:"status",
        text:"status"
    },
]