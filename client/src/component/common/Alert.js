import React, {useContext} from 'react'
import AlertContext from "../context/alert/alertContext"

const Alert = () => {
const alertContext = useContext(AlertContext);

    return (
        alertContext.alerts.length > 0 ? 
        alertContext.alerts.map((alert)=>{ return (
              <div key={alert.id} className={`alert alert-${alert.type}  text-center`}>
                  <i className="fas fa-info-circle    "></i>   { '' + alert.msg} 
              </div>  )
        })
        : null
    )
}

export default Alert
