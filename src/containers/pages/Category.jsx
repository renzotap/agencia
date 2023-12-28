import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import {Helmet} from 'react-helmet-async';
import { get_categories } from "redux/actions/categories/categories";
import { get_blog_list_category, get_blog_list_category_page } from "redux/actions/blog/blog";
import { connect } from "react-redux";
import CategoriesHeader from "components/blog/CategoriesHeader";
import { useParams } from "react-router-dom";
import BlogList from "components/blog/BlogList";



function Category({
    get_categories,
    categories,
    get_blog_list_category,
    get_blog_list_category_page,
    posts,
    count,
    next,
    previous,
}){

    const params = useParams()
    const slug = params.slug

    useEffect(()=>{
        window.scrollTo(0,0)
        get_categories() 
        get_blog_list_category(slug)
     
        
    },[])

    return(
        <Layout>
            <Helmet>
                <title>BrainRemoteControl | Category: {slug} </title>
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
            <div className="pt-28">
                <CategoriesHeader categories={categories&&categories}/>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="mx-auto max-w-6xl mt-12">
                    {/* Content goes here */}
                    <BlogList posts={posts&&posts} get_blog_list_page={get_blog_list_category_page} count={count&&count}/>
                    </div>
                </div>                
            </div>
            
                <Footer/>
        </Layout>
    )
}
const mapStateToProps=state=>({
    categories: state.categories.categories,
    posts: state.blog.blog_list_category,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,
})
export default connect(mapStateToProps,{
    get_categories,
    get_blog_list_category,
    get_blog_list_category_page
}) (Category)