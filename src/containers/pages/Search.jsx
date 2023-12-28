import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import {Helmet} from 'react-helmet-async';
import { get_categories } from "redux/actions/categories/categories";
import { get_blog_list, get_blog_list_page, search_blog, search_blog_page } from "redux/actions/blog/blog";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import BlogList from "components/blog/search/BlogList";


function Search({
    posts,
    count,
    next,
    previous,
    search_blog,
    search_blog_page,
}){
    const params = useParams()
    const term = params.term


    useEffect(()=>{
        window.scrollTo(0,0)
        search_blog(term)
        
    },[])

    return(
        <Layout>
            <Helmet>
                <title>BrainRemoteControl | Blog</title>
                <meta name='description' content='Soluciones de control de dispositivos a través de multiplataforma web'/>
                <meta name='keywords' content='control, domotica, web, aplicacion, dispositivos, tecnología, internet de las cosas'/>
                <meta name='robots' content='all'/>
                <link rel='cannonical' href="https://brainremotecontrol.com/" />
                <meta name='author' content='BrainRemoteControl' />
                <meta name='publisher' content='BrainRemoteControl' />

                {/* Social Media Tags */}
                <meta property="og:title" content='BrainRemoteControl | Control' />
                <meta property="og:description" content='Soluciones de control de dispositivos a través de multiplataforma web' />
                <meta property="og:url" content="https://brainremotecontrol.com/" />
                <meta property="og:image" content='http://www.w3.org/2000/svg' />

                <meta name="twitter:title" content='BrainRemoteControl | Control' />
                <meta
                    name="twitter:description"
                    content='Soluciones de control de dispositivos a través de multiplataforma web.'
                />
                <meta name="twitter:image" content='http://www.w3.org/2000/svg' />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar/>
            <div className="pt-40">
                <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-full mt-12">
                        <BlogList posts={posts&&posts} get_blog_list_page={search_blog_page} term={term} count={count&&count}/>
                    </div>
                </div>
            </div>
            
                <Footer/>
        </Layout>
    )
}
const mapStateToProps=state=>({
    posts: state.blog.filtered_posts,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,
})
export default connect(mapStateToProps,{
    search_blog,
    search_blog_page,
}) (Search)