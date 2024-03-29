using System;
using System.Linq.Expressions;
using Core.Entities;
using Core.Specifications;

namespace Core.Interfaces
{
    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecification(ProductSpecParams productSpecParams) 
        : base(x=>
            (string.IsNullOrEmpty(productSpecParams.Search) || x.Name.ToLower().Contains(productSpecParams.Search)) &&
            (!productSpecParams.BrandId.HasValue||x.ProductBrandId == productSpecParams.BrandId) &&
            (!productSpecParams.TypeId.HasValue||x.ProductTypeId == productSpecParams.TypeId) 
        )
        {
            AddInclude(x=>x.ProductType);
            AddInclude(x=>x.ProductBrand);
            AddOrderBy(x=>x.Name);
            ApplyPaging(productSpecParams.PageSize*(productSpecParams.PageIndex-1), productSpecParams.PageSize);

            if(!string.IsNullOrEmpty(productSpecParams.sort)){
                switch(productSpecParams.sort)
                {
                    case "priceAsc":
                     AddOrderBy(p=>p.Price);
                     break;
                    case "priceDesc":
                     AddOrderByDescending(p=>p.Price);
                     break;
                    default:
                    AddOrderBy(p=>p.Name);
                    break;                
                }
            }
        }

        public ProductsWithTypesAndBrandsSpecification(int id) : base(x=>x.Id == id)
        {
                        AddInclude(x=>x.ProductType);
            AddInclude(x=>x.ProductBrand);
        }
    }
}