import { useQuery } from "@tanstack/react-query";
import {
  ProductosTemplate,
  SpinnerLoader,
  useCategoriasStore,
  useEmpresaStore,
  useMarcaStore,
  useProductosStore,
} from "../index";

export function Productos() {
  const {mostrarMarca} = useMarcaStore()
  const {mostrarcategorias}= useCategoriasStore()
  const { mostrarproductos, dataproductos, buscarproductos, buscador } = useProductosStore();
  const { dataempresa } = useEmpresaStore();
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar productos", { id_empresa: dataempresa.empresa?.id }],
    queryFn: () => mostrarproductos({ id_empresa: dataempresa.empresa?.id }),
    enabled: dataempresa.empresa?.id != null,
  });
  
  const { data:datamarcas } = useQuery({
    queryKey: ["mostrar marca", { id_empresa: dataempresa.empresa?.id }],
    queryFn: () => mostrarMarca({ id_empresa: dataempresa.empresa?.id }),
    enabled: dataempresa.empresa?.id != null,
  });
  const { data:datacategorias } = useQuery({
    queryKey: ["mostrar categorias", { id_empresa: dataempresa.empresa?.id }],
    queryFn: () => mostrarcategorias({ id_empresa: dataempresa.empresa?.id }),
    enabled: dataempresa.empresa?.id != null,
  });
  if (isLoading) {
    return <SpinnerLoader />;
  }
  if (error) {
    return <span>Error...{error.message}</span>;
  }

  return <ProductosTemplate data={dataproductos}/>;
}