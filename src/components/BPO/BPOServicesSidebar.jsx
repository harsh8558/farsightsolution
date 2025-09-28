"use client"
import { ArrowRight } from "lucide-react"
import { ListGroup } from "react-bootstrap"
import "../assets/scss/components/bpo-services-sidebar.scss"

const BPOServicesSidebar = () => {
  return (
    <div className="bpo-services-sidebar-wrapper">
      <h3 className="bpo-services-sidebar-title">IT Help Desk Services</h3>
      <ListGroup className="bpo-services-sidebar-list-group">
        <ListGroup.Item className="bpo-services-sidebar-list-item">
          <a href="/bpo-services/customer-service" className="bpo-services-sidebar-link">
            Customer Service <ArrowRight size={16} className="bpo-services-sidebar-arrow" />
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="bpo-services-sidebar-list-item">
          <a href="/bpo-services/data-office-services" className="bpo-services-sidebar-link">
            Data Office Services <ArrowRight size={16} className="bpo-services-sidebar-arrow" />
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="bpo-services-sidebar-list-item">
          <a href="/bpo-services/content-management" className="bpo-services-sidebar-link">
            Content Management <ArrowRight size={16} className="bpo-services-sidebar-arrow" />
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="bpo-services-sidebar-list-item">
          <a href="/bpo-services/backend-outsourcing" className="bpo-services-sidebar-link">
            Backend Outsourcing Services <ArrowRight size={16} className="bpo-services-sidebar-arrow" />
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="bpo-services-sidebar-list-item">
          <a href="/bpo-services/backend-outsourcing" className="bpo-services-sidebar-link">
            Backend Outsourcing Services <ArrowRight size={16} className="bpo-services-sidebar-arrow" />
          </a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default BPOServicesSidebar
