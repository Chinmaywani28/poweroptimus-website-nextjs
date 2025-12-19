"use client"
// import { Container } from "react-bootstrap"
import Link from "next/link";
// import routeData from "../data.json"
import { Trans, withTranslation } from "react-i18next"
import { useEffect } from "react"
import { links } from "./data";
import './page.css'; // Import HomePage specific styles


const SiteMap = () => {
    useEffect(() => {
        document.title="Sitemap | ConstructMonitor";
        window.scroll(0, 0);
    }, []);
    
    // const links = routeData.route;
    // return <Container className="py-3 sitemap-container">
    //     <h3 className="mb-3" style={{fontSize: "34px"}}><Trans>footer.siteMap</Trans></h3>
    //     <ul className="ms-4"  style={{fontSize: "22px"}}>
    //         {links.map(node => {
    //             if (node.children.length === 0)
    //                 return <li key={node.title} className="py-2">
    //                     <Link href={node.link}><Trans>{node.title}</Trans></Link>
    //                 </li>
    //             else
    //                 return <li><Trans>{node.title}</Trans>
    //                     <ul>
    //                         {node.children.map(childNode => <li className="py-2" key={childNode.title}>
    //                             <Link href={childNode.link}><Trans>{childNode.title}</Trans></Link>
    //                         </li>)
    //                         }
    //                     </ul>
    //                 </li>
    //         })}
    //     </ul>
    // </Container>
    return (
      <div>
        

        {/* <ul className="marginkkk">
            {
            links.map((item: any) => {
              if(item.children.length === 0){
                return <li>
                    <Link href={item.link}>{item.title}</Link>
                    

                    
                  </li>
              }else{
                return <ul className="child-node">
                  {
                    item.children.map((child: any) => {
                      return <li>
                        <Link href={child.link}>{child.title}</Link>
                      </li>
                    })
                  }
                </ul>
              }
            })
          }
          
          
        </ul> */}
        <ul className="marginkkk">
        <h1>Sitemap</h1>
          {links.map((item: any, index: number) => (
            <li key={index} className="body2" >
              <Link href={item.link} style={{ textDecoration: "none", color: "black" }}>{item.title}</Link>

              {item.children && item.children.length > 0 && (
                <ul className="child-node">
                  {item.children.map((child: any, childIndex: number) => (
                    <li key={childIndex}>
                      <Link href={child.link} style={{ textDecoration: "none", color: "black" }}>{child.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    );

    
}

export default SiteMap