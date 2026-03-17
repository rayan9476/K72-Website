import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectInfo } from "../../Data/WorkInfopageData";

export default function useProjectInfo() {
  const { projectId } = useParams();

  const [data, setdata] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!projectId) return;
    const project = projectInfo.find((item) => String(item.id) === projectId);

    if (!project) {
      setNotFound(true);
    } else {
      setdata(project);
      setNotFound(false);
    }
  }, [projectId]);

  return [data, projectId, notFound];
}
