Search.setIndex({docnames:["api/api_backend","api/api_channels","api/api_components","api/api_event","api/api_exception","api/api_queue","guides/bootstrap_connector","guides/code_overview","guides/concepts","guides/jobrunner","guides/migration_guide","index","project/contribute","project/contributors","project/license","project/roadmap"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/api_backend.rst","api/api_channels.rst","api/api_components.rst","api/api_event.rst","api/api_exception.rst","api/api_queue.rst","guides/bootstrap_connector.rst","guides/code_overview.rst","guides/concepts.rst","guides/jobrunner.rst","guides/migration_guide.rst","index.rst","project/contribute.rst","project/contributors.rst","project/license.rst","project/roadmap.rst"],objects:{"connector.components":{backend_adapter:[2,0,0,"-"],binder:[2,0,0,"-"],core:[2,0,0,"-"],listener:[2,0,0,"-"],locker:[2,0,0,"-"],mapper:[2,0,0,"-"],synchronizer:[2,0,0,"-"]},"connector.components.backend_adapter":{BackendAdapter:[2,1,1,""],CRUDAdapter:[2,1,1,""]},"connector.components.backend_adapter.BackendAdapter":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""]},"connector.components.backend_adapter.CRUDAdapter":{"delete":[2,3,1,""],_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""],create:[2,3,1,""],read:[2,3,1,""],search:[2,3,1,""],search_read:[2,3,1,""],write:[2,3,1,""]},"connector.components.binder":{Binder:[2,1,1,""]},"connector.components.binder.Binder":{_backend_field:[2,2,1,""],_external_field:[2,2,1,""],_inherit:[2,2,1,""],_name:[2,2,1,""],_odoo_field:[2,2,1,""],_sync_date_field:[2,2,1,""],_usage:[2,2,1,""],bind:[2,3,1,""],to_external:[2,3,1,""],to_internal:[2,3,1,""],unwrap_binding:[2,3,1,""],unwrap_model:[2,3,1,""]},"connector.components.core":{BaseConnectorComponent:[2,1,1,""]},"connector.components.core.BaseConnectorComponent":{_name:[2,2,1,""],advisory_lock_or_retry:[2,3,1,""],backend_record:[2,4,1,""],binder_for:[2,3,1,""]},"connector.components.listener":{ConnectorListener:[2,1,1,""]},"connector.components.listener.ConnectorListener":{_inherit:[2,2,1,""],_name:[2,2,1,""],no_connector_export:[2,3,1,""]},"connector.components.locker":{RecordLocker:[2,1,1,""]},"connector.components.locker.RecordLocker":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""],lock:[2,3,1,""]},"connector.components.mapper":{ExportMapChild:[2,1,1,""],ExportMapper:[2,1,1,""],ImportMapChild:[2,1,1,""],ImportMapper:[2,1,1,""],MapChild:[2,1,1,""],MapRecord:[2,1,1,""],Mapper:[2,1,1,""],changed_by:[2,5,1,""],convert:[2,5,1,""],external_to_m2o:[2,5,1,""],follow_m2o_relations:[2,5,1,""],m2o_to_external:[2,5,1,""],mapping:[2,5,1,""],none:[2,5,1,""],only_create:[2,5,1,""]},"connector.components.mapper.ExportMapChild":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""]},"connector.components.mapper.ExportMapper":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""]},"connector.components.mapper.ImportMapChild":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""],format_items:[2,3,1,""]},"connector.components.mapper.ImportMapper":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""]},"connector.components.mapper.MapChild":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""],format_items:[2,3,1,""],get_item_values:[2,3,1,""],get_items:[2,3,1,""],skip_item:[2,3,1,""]},"connector.components.mapper.MapRecord":{parent:[2,4,1,""],source:[2,4,1,""],update:[2,3,1,""],values:[2,3,1,""]},"connector.components.mapper.Mapper":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""],changed_by_fields:[2,3,1,""],finalize:[2,3,1,""],map_methods:[2,4,1,""],map_record:[2,3,1,""],options:[2,4,1,""]},"connector.components.synchronizer":{Deleter:[2,1,1,""],Exporter:[2,1,1,""],GenericExporter:[2,1,1,""],Importer:[2,1,1,""],Synchronizer:[2,1,1,""]},"connector.components.synchronizer.Deleter":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""]},"connector.components.synchronizer.Exporter":{_base_mapper_usage:[2,2,1,""],_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""]},"connector.components.synchronizer.GenericExporter":{_after_export:[2,3,1,""],_create:[2,3,1,""],_create_data:[2,3,1,""],_default_binding_field:[2,2,1,""],_delay_import:[2,3,1,""],_export_dependencies:[2,3,1,""],_export_dependency:[2,3,1,""],_has_to_skip:[2,3,1,""],_inherit:[2,2,1,""],_lock:[2,3,1,""],_map_data:[2,3,1,""],_name:[2,2,1,""],_retry_unique_violation:[2,3,1,""],_run:[2,3,1,""],_should_import:[2,3,1,""],_update:[2,3,1,""],_update_data:[2,3,1,""],_validate_create_data:[2,3,1,""],_validate_update_data:[2,3,1,""],run:[2,3,1,""]},"connector.components.synchronizer.Importer":{_base_mapper_usage:[2,2,1,""],_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""]},"connector.components.synchronizer.Synchronizer":{_base_backend_adapter_usage:[2,2,1,""],_base_mapper_usage:[2,2,1,""],_inherit:[2,2,1,""],_name:[2,2,1,""],backend_adapter:[2,4,1,""],binder:[2,4,1,""],mapper:[2,4,1,""],run:[2,3,1,""]},"connector.exception":{ConnectorException:[4,6,1,""],IDMissingInBackend:[4,6,1,""],InvalidDataError:[4,6,1,""],ManyIDSInBackend:[4,6,1,""],MappingError:[4,6,1,""],NetworkRetryableError:[4,6,1,""],NoConnectorUnitError:[4,6,1,""],NoExternalId:[4,6,1,""]},"connector.models.backend_model":{ConnectorBackend:[0,1,1,""],ExternalBinding:[0,1,1,""]},"odoo.addons.component":{builder:[2,0,0,"-"],core:[2,0,0,"-"],exception:[2,0,0,"-"]},"odoo.addons.component.builder":{ComponentBuilder:[2,1,1,""]},"odoo.addons.component.builder.ComponentBuilder":{build_registry:[2,3,1,""],load_components:[2,3,1,""]},"odoo.addons.component.core":{AbstractComponent:[2,1,1,""],Component:[2,1,1,""],ComponentDatabases:[2,1,1,""],ComponentRegistry:[2,1,1,""],MetaComponent:[2,1,1,""],WorkContext:[2,1,1,""]},"odoo.addons.component.core.AbstractComponent":{collection:[2,4,1,""],component:[2,3,1,""],component_by_name:[2,3,1,""],env:[2,4,1,""],many_components:[2,3,1,""],model:[2,4,1,""]},"odoo.addons.component.core.ComponentRegistry":{get:[2,3,1,""],load_components:[2,3,1,""],lookup:[2,3,1,""]},"odoo.addons.component.core.MetaComponent":{apply_on_models:[2,4,1,""]},"odoo.addons.component.core.WorkContext":{collection:[2,2,1,""],component:[2,3,1,""],component_by_name:[2,3,1,""],env:[2,4,1,""],many_components:[2,3,1,""],model:[2,2,1,""],model_name:[2,2,1,""],work_on:[2,3,1,""]},"odoo.addons.component.exception":{ComponentException:[2,6,1,""],NoComponentError:[2,6,1,""],SeveralComponentError:[2,6,1,""]},"odoo.addons.component.models":{collection:[2,0,0,"-"]},"odoo.addons.component.models.collection":{Collection:[2,1,1,""]},"odoo.addons.component.models.collection.Collection":{work_on:[2,3,1,""]},"odoo.addons.component_event.components":{event:[3,0,0,"-"]},"odoo.addons.component_event.components.event":{skip_if:[3,5,1,""]},"odoo.addons.component_event.models":{base:[3,0,0,"-"]},"odoo.addons.component_event.models.base":{Base:[3,1,1,""]},"odoo.addons.queue_job":{job:[5,0,0,"-"]},"odoo.addons.queue_job.job":{DelayableRecordset:[5,1,1,""],Job:[5,1,1,""],job:[5,5,1,""],related_action:[5,5,1,""]},"odoo.addons.queue_job.job.Job":{args:[5,2,1,""],channel:[5,4,1,""],date_created:[5,2,1,""],date_done:[5,2,1,""],date_enqueued:[5,2,1,""],date_started:[5,2,1,""],db_record:[5,3,1,""],db_record_from_uuid:[5,3,1,""],description:[5,4,1,"id1"],enqueue:[5,3,1,""],eta:[5,4,1,"id5"],exc_info:[5,2,1,""],exc_message:[5,2,1,""],exc_name:[5,2,1,""],exec_time:[5,4,1,""],func:[5,4,1,"id0"],func_string:[5,4,1,""],identity_key:[5,4,1,""],job_function_name:[5,4,1,""],job_record_with_same_identity_key:[5,3,1,""],kwargs:[5,2,1,""],load:[5,3,1,""],max_retries:[5,2,1,""],model_name:[5,4,1,"id3"],perform:[5,3,1,""],postpone:[5,3,1,""],priority:[5,2,1,""],recordset:[5,2,1,""],related_action:[5,3,1,""],result:[5,2,1,""],retry:[5,2,1,""],set_done:[5,3,1,""],set_enqueued:[5,3,1,""],set_failed:[5,3,1,""],set_pending:[5,3,1,""],set_started:[5,3,1,""],state:[5,2,1,""],store:[5,3,1,""],user_id:[5,4,1,"id4"],uuid:[5,4,1,"id2"]},"odoo.addons.queue_job.jobrunner":{channels:[1,0,0,"-"],runner:[9,0,0,"-"]},"odoo.addons.queue_job.jobrunner.channels":{Channel:[1,1,1,""],ChannelJob:[1,1,1,""],ChannelManager:[1,1,1,""],ChannelQueue:[1,1,1,""],PriorityQueue:[1,1,1,""],SafeSet:[1,1,1,""],split_strip:[1,5,1,""]},"odoo.addons.queue_job.jobrunner.channels.Channel":{configure:[1,3,1,""],fullname:[1,4,1,""],get_jobs_to_run:[1,3,1,""],get_subchannel_by_name:[1,3,1,""],get_wakeup_time:[1,3,1,""],has_capacity:[1,3,1,""],remove:[1,3,1,""],sequential:[1,4,1,""],set_done:[1,3,1,""],set_failed:[1,3,1,""],set_pending:[1,3,1,""],set_running:[1,3,1,""]},"odoo.addons.queue_job.jobrunner.channels.ChannelJob":{sorting_key:[1,3,1,""],sorting_key_ignoring_eta:[1,3,1,""]},"odoo.addons.queue_job.jobrunner.channels.ChannelManager":{get_channel_by_name:[1,3,1,""],get_channel_from_config:[1,3,1,""],get_jobs_to_run:[1,3,1,""],get_wakeup_time:[1,3,1,""],notify:[1,3,1,""],parse_simple_config:[1,3,1,""],remove_db:[1,3,1,""],remove_job:[1,3,1,""],simple_configure:[1,3,1,""]},"odoo.addons.queue_job.jobrunner.channels.ChannelQueue":{add:[1,3,1,""],get_wakeup_time:[1,3,1,""],pop:[1,3,1,""],remove:[1,3,1,""]},"odoo.addons.queue_job.jobrunner.channels.PriorityQueue":{add:[1,3,1,""],pop:[1,3,1,""],remove:[1,3,1,""]},"odoo.addons.queue_job.jobrunner.channels.SafeSet":{remove:[1,3,1,""]},"odoo.addons.queue_job.models":{base:[5,0,0,"-"],queue_job:[5,0,0,"-"]},"odoo.addons.queue_job.models.base":{Base:[5,1,1,""]},"odoo.addons.queue_job.models.base.Base":{with_delay:[5,3,1,""]},"odoo.addons.queue_job.models.queue_job":{QueueJob:[5,1,1,""]},"odoo.addons.queue_job.models.queue_job.QueueJob":{_inherit:[5,2,1,""],_name:[5,2,1,""]},connector:{exception:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","property","Python property"],"5":["py","function","Python function"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:property","5":"py:function","6":"py:exception"},terms:{"0":[1,2,5,6,9,10,11,14],"1":[0,1,2,5,6,9,10,14],"10":[1,5,6,11,14],"100":[1,11],"101":1,"102":1,"103":1,"104":1,"105":1,"106":1,"107":1,"11":[1,2,10,14],"12":[1,2,5,9,10,14],"13":[1,14],"14":14,"15":[1,5,14],"16":14,"17":14,"19":14,"1996":14,"2":[1,2,5,6,7,9,10,14],"20":[1,5,14],"2007":14,"2013":[11,13],"2015":11,"2017":[10,11],"21":1,"22":1,"28":14,"3":[1,2,6,10,11,14],"30":[1,5,14],"4":[1,9,14],"443":9,"4851":2,"5":[1,2,5,7,9,12,14],"512":2,"5432":9,"6":[1,2,14],"60":[5,14],"6b":14,"6d":14,"7":[0,1,10,14],"8":[1,6,14],"8069":9,"9":[1,10,14],"abstract":[0,2,7,10,11],"b\u00e9al":13,"boolean":2,"break":1,"case":[2,14],"catch":2,"char":[0,6,7],"class":[0,1,2,3,5,6,7,8,9,10,14],"default":[1,2,5,8,9],"do":[0,2,10,12,14],"export":[2,3,5,7,8,10],"final":[0,2,5,7,11,14],"float":2,"function":[2,5,10,14],"import":[1,2,6,7,8,10,11,14],"int":2,"jo\u00ebl":13,"long":[2,6,14],"new":[1,2,5,6,7,8,9,11,14],"public":14,"return":[0,1,2,3,5,7,8,10,14],"rh\u00f4nalia":13,"s\u00e9bastien":13,"st\u00e9phane":13,"static":5,"super":[2,3,7,10],"switch":2,"syst\u00e8m":13,"true":[0,1,2,5,6,7,10],"try":[2,5],"var":5,"void":14,"while":9,A:[1,2,4,5,8,9,10,11,13,14,15],AND:14,AS:14,And:[2,8,10,13],As:[2,6,10],At:1,BE:14,BEING:14,BUT:14,BY:14,Be:6,But:[2,10,14],By:14,FOR:[2,14],For:[0,2,3,6,8,10,14],IF:14,IN:14,IS:14,IT:13,If:[1,2,3,5,10,12,14],In:[2,3,5,6,8,9,10,14],Is:2,It:[0,1,2,3,5,6,8,9,10,11,13,14],Its:5,NO:14,NOT:14,No:[1,2,4,10,14],Not:[11,14],OF:14,OR:14,Of:6,On:3,One:2,Or:[9,10],SUCH:14,Such:[9,14],THE:14,THERE:14,TO:14,The:[0,1,2,3,4,5,6,8,9,10,11,12,14],Their:6,Then:[2,10,12],There:[2,14],These:[1,14],To:[2,10,14],WILL:14,WITH:14,With:2,_:5,__init__:6,__manifest__:6,_after_export:2,_apply_on:[2,3,7,10],_backend_field:2,_backend_typ:10,_base_backend_adapter_usag:2,_base_mapper_usag:2,_build:12,_call:7,_collect:[2,3,7,10],_creat:2,_create_data:2,_default_binding_field:2,_delay_import:2,_descript:[0,6,7,10],_event:[3,7,10],_export_depend:2,_external_field:2,_has_to_skip:2,_inherit:[0,2,3,5,6,7,8,10],_lock:2,_logger:[3,7],_magento_model:7,_map_data:2,_model_nam:[2,10],_modules_compon:2,_name:[0,2,3,5,6,7,10],_odoo_field:2,_register_hook:2,_retry_unique_viol:2,_run:2,_select_vers:0,_should_import:2,_sql_constraint:0,_super:2,_sync_date_field:2,_updat:2,_update_data:2,_usag:[2,3,7,10],_validate_create_data:2,_validate_update_data:2,a1:1,a2:1,a3:1,a4:1,a5:1,a6:1,a_funct:2,abil:[11,14],abl:2,abort:9,about:14,abov:[1,2,3,9,14],absenc:14,absent:1,absolut:[2,14],abstractcompon:[2,7,10],abstractmodel:[3,6,10],accept:[5,9,12,14],access:[2,14],accompani:14,accomplish:14,accord:[1,2,7,9,14],account:[2,7],accountinvoic:7,achiev:14,acknowledg:14,acquir:[2,14],across:[2,8,14],acson:[11,13],act_window:5,action:[2,5,8,10,14],action_invoice_paid:7,activ:[2,5,14],actor:2,actual:[1,9,12,14],ad:[1,2,3,5,6,8,9,10,14],adapt:[6,7,10,11,14],add:[0,1,2,3,8,9,10,11,12,14,15],addit:[11,14],addon:[0,1,2,3,4,5,6,7,8,9,10],address:[10,14],adjust:9,adopt:14,advers:14,advic:12,advis:[2,8,14],advisori:2,advisory_lock_or_retri:2,affect:14,affero:14,affirm:14,after:[1,2,5,9,12,14],against:14,aggreg:14,agre:[14,15],agreement:14,akret:[11,13],alexandr:13,all:[0,1,2,3,5,6,8,9,10,12,13,14,15],alleg:14,allow:[2,3,5,9,10,13,14],along:14,alongsid:2,alreadi:[0,1,2,5,7,10,14],also:[0,1,2,3,5,6,8,9,10,12,14],altern:[9,14],although:9,alwai:2,amazon:11,among:14,amount:13,an:[0,1,2,3,4,5,6,8,9,11,12,14,15],ancillari:14,ani:[2,3,5,6,9,11,14],anonym:9,anoth:[2,6,8,10],anothercompon:2,anti:14,anybox:[9,12,13],anymor:1,anyon:14,anyth:[2,8,14],apertoso:13,api:[0,1,2,3,6,7],app:11,appear:5,appli:[1,2,8,10,14],applic:[1,9,14],apply_on_model:2,approach:12,appropri:14,approxim:14,ar:[1,2,3,5,7,8,9,10,12,14],arbitrari:[1,2],archiv:14,arg:[2,3,5,7],argument:[2,3,5,10],aris:14,around:[0,1],arrang:14,arriv:5,arthur:13,articl:14,articul:0,asid:1,ask:[2,9,10],aspect:10,assert:[2,5,14],asset:14,assign:[2,5],associ:[1,9,14],assum:[2,14],assumpt:14,asynchron:[5,11],attach:[1,2,5,14],attempt:[9,14],attr:[2,10],attribut:[2,3,10,14],auguria:13,author:[6,14],auto:1,autocr:[1,9],automat:[9,14],autosub:1,avail:[0,1,2,8,9,10,11,14],avanzosc:13,awai:14,await:3,awar:6,b1:1,b2:1,b:[1,8,9,12,14],back:2,backend:[3,4,7,11],backend_adapt:[2,7,8,10],backend_id:[0,2,6,10],backend_model:0,backend_record:[2,7,10],backendadapt:[2,8],baconni:[11,13],balanc:9,bar:[1,2],base:[0,1,4,5,7,8,10,12,14],base_import_async:9,baseconnectorcompon:2,basemagentoconnectorcompon:[7,10],basemodel:[0,2,3,5],basi:2,basic:[2,8,14],batch:[2,8,10],baz:1,beau:13,becaus:[0,1,2,7,9,14],becom:[2,14],bee:13,been:[2,3,4,5,7,8,9,10,11,13,14],befor:[1,2,3,5,9],begin:2,behalf:14,behavior:2,behaviour:1,being:[2,5,14],believ:14,bello:13,belong:12,below:[3,7,8,14],benefit:14,benoit:13,besid:6,bessi:13,best:14,better:14,between:[0,2,6,8,9,10,11,14],beyond:14,bi:11,bidoul:13,bin:12,bind:[2,5,7,10,11],binder:[6,7,10],binder_for:2,binding_extra_v:2,binding_field:2,binding_id:10,binding_model:2,bit:12,bitbucket:12,block:[2,11],bodi:14,boilerpl:6,boostrap:[11,12],bootstrap:[6,12],both:[2,7,8,14],breviti:7,brief:14,brough:2,brows:[2,10],browse_record:2,buffer:15,bug:12,build:[2,11,12],build_registri:2,buildout:[9,12],built:2,burn:13,busi:[6,14],button:5,button_trigger_export_async:10,button_trigger_export_sync:10,c:[1,9,14],caches:2,call:[0,2,5,8,10,14],camptocamp:[11,13],can:[0,1,2,3,4,5,6,8,9,10,12,14,15],candid:2,cannot:[2,14],capabl:[2,8],capac:[1,9],care:2,carri:14,cascad:0,cat:2,catalog:12,categ_id:2,categori:[0,2,6],caus:[4,14],caveat:11,cd:12,ceas:14,certain:[11,14],cessat:14,cfg:12,ch:[1,9],chambreuil:13,chanc:9,chang:[2,5,6,10,14],change_context:10,changed_bi:2,changed_by_field:2,channel:[5,11],channel_nam:1,channeljob:1,channelmanag:1,channelqueu:1,character:14,charg:14,check:[2,5,9,10],checkpoint:11,child:2,children:[1,2],choic:11,choos:[2,14],christoph:13,circumst:14,circumvent:14,civil:14,claim:14,classic:2,classmethod:[1,5],clean:2,clear:[2,14,15],client:[2,7],close:[2,14],closur:2,cm:[1,11],cmi:11,code:[2,3,6,8,10,11,12,14],coffe:6,coffee_bind:6,coffee_id:6,coffeebackend:6,coffeebind:6,coll:2,collect:[0,6,7,8,10,14],collectedev:[3,10],collection_nam:2,colpaert:13,column:0,com:[8,10,12],combel:13,combin:[1,14],come:[1,2,8,9,14],comma:1,command:[2,14],comment:1,commerc:[8,11,12],commerci:14,commit:[2,14],common:[2,6,8,14],commonli:10,commun:14,comodel_nam:[0,6],compani:13,compar:[1,10],comparison:1,compet:[1,9],compil:[12,14],complet:[1,3,5,12],complex:10,compli:14,complianc:14,compon:[0,1,11,14],component_by_nam:2,component_ev:[2,3,6,8,10],component_usag:2,componentbuild:2,componentdatabas:2,componentexcept:2,componentregistri:2,components_registri:2,compos:[2,10],comput:[2,5,14],compute_st:2,concept:[11,12],concern:14,concret:[0,2,6,8],concurr:[2,9],cond:3,condit:[3,14],config:1,config_str:1,configur:[1,2,6,11],confirm:9,conflict:2,connect:[6,9,11,14],connector:[0,4,7,13],connector_coffe:6,connector_ecommerc:8,connector_magento:[0,12],connector_no_export:[2,3,10],connector_xxx:12,connectorbackend:0,connectordb:12,connectorenviron:10,connectorexcept:4,connectorlisten:[2,8],connectorsess:10,connectorunit:[4,10],consequ:14,consequenti:14,consid:[1,2,5,14],consist:14,consolid:0,conspicu:14,constitut:14,constrain:10,constraint:2,constru:14,consum:14,contact:14,contain:[0,2,10,14],content:14,context:[0,2,3,8,10,14],contextmanag:2,contextu:15,continu:14,contractu:14,contradict:14,contrast:14,contribut:[11,13],contributor:[11,14],control:14,conv_typ:2,convei:14,conveni:14,convent:6,convers:[2,8],convert:[2,7,8],convey:14,cooper:14,copi:[2,14],copyleft:14,copyright:14,core:[7,10],corp:13,correct:[2,10,14],correctli:9,correspond:[2,14],cost:14,could:[0,3,10,14],count:5,counter:2,counterclaim:14,countri:[2,14],country_id:2,cours:6,court:14,coven:14,cover:14,coverag:14,crash:9,creat:[1,2,3,5,6,7,8,9,10],createdb:12,creation:[1,2,3],creativ:[2,10],criteria:[2,7],criterion:14,crm:11,cross:14,crud:[2,8],crudadapt:2,ctx:5,cure:14,current:[1,2,5,10],custom:[0,2,7,8,10,11,14],customari:14,customarili:14,d:[12,14],dai:14,damag:14,data:[0,2,4,6,7,8,14],databas:[2,5,9,12],date:[0,1,5,14],date_cr:[1,5],date_don:5,date_enqueu:5,date_start:5,datetim:1,david:13,db:[1,9],db_host:9,db_name:1,db_port:9,db_record:5,db_record_from_uuid:5,dbname:9,de:13,dead:10,debonix:13,debug:[5,9],decemb:14,decid:14,declar:[1,2,6],declin:14,decor:[2,3,8,10],decoupl:[2,8],dedic:[1,9],deem:14,def:[0,2,3,5,7,10],default_channel:[5,10],default_lang_id:10,default_warehous:2,defect:14,defend:14,defens:14,defin:[0,2,5,8,14],definit:[0,2,14],del:13,delai:[1,2,3,5,8,9,10,11],delay:5,delay_export:10,delayablerecordset:5,delet:[2,8,10],deni:14,denomin:14,depend:[2,6,10,12],deprec:5,depriv:14,dequeu:[1,9],descend:10,describ:8,descript:[5,6],design:[11,13,14],despit:1,destin:2,detail:[2,5,8,14],detect:9,determin:[5,14],develop:[1,5,8,12,13,14],diagram:[1,9],dict:[2,5],dictionari:1,didn:3,dietrich:13,differ:[1,2,3,8,10,14],dijkstra:13,direct:[2,8,11,14],directli:[2,5,14],disabl:[3,5],disclaim:14,discriminatori:14,discuss:2,dispatch:[9,10],displai:14,distinct:2,distinguish:14,distribut:14,dive:12,dlanguag:12,do_anyth:10,do_someth:10,doc:5,document:[1,2,6,8,12,14],doe:[1,2,4,10,11,14],doesn:3,domain:[2,12],done:[0,1,2,3,5,13],donelli:13,dot:[1,2,5],doubt:14,down:[1,9],downstream:[1,9,14],drop:1,drupal:11,due:1,duplic:2,durabl:14,dure:[2,4,10,13],dwell:14,dynam:[10,14],e1:1,e2:1,e3:1,e:[1,2,8,10,11,12,14],each:[1,2,3,5,8,9,14],earlier:[1,14],eas:8,easi:11,easili:11,ebai:11,ed:10,edit:[6,12],eeze:13,effect:[10,14],effort:14,eg:9,either:[2,5,9,14],elaps:1,electron:14,element:1,elico:13,els:[2,7,8,10],embodi:14,employ:14,empti:[1,2,9,12],en_u:10,enabl:[5,9,14],encourag:[8,14],end:[1,2,14],enforc:[1,9,14],engin:11,enough:1,enova:13,enqueu:[1,5,9],ensur:14,ensure_on:[2,5,7,10],enter:14,entir:14,entiti:14,entri:[1,2],entrypoint:[2,8],env:[2,3,5,10],environ:[2,8,9,10],equal:[1,2,3],equival:[2,14],eric:13,erp:11,error:[2,4,5,15],especi:12,essenti:14,estim:5,eta:[1,5],etc:[1,9],evalu:3,even:[1,2,14],event:[2,11,14],eventu:2,ever:14,everi:[2,6,8,10],everyon:14,evolv:10,ex:2,exact:14,exampl:[0,1,2,3,5,6,7,8,9,10,11,12,14],exc_info:5,exc_messag:5,exc_nam:5,except:[1,5,9,11,14],exchang:11,exclud:[1,14],exclude_addon:2,exclus:14,excus:14,exec_tim:5,execut:[1,2,3,5,9,10,14],exercis:14,exist:[0,1,2,4,5,6,7,9,10,12],expect:[2,5,14],explic:1,explicitli:[2,9,14],export_one_th:5,export_partn:5,export_pay:7,export_product:5,export_record:[2,3,10],export_synchron:10,exporter_class:2,exportmapchild:2,exportmapp:2,express:[3,14],expressli:14,extend:[2,3,5,8,10,11,14],extens:14,extent:14,extern:[0,2,4,6,7,8,10],external_data:7,external_id:[0,2,7,10],external_to_m2o:2,externalbind:0,extra:2,extra_arg:5,extra_mapp:2,extract:[5,8,10],f:14,fabio:13,facil:[14,15],facilit:14,factori:10,fail:[1,2,5,14],failur:[4,14],fair:14,fals:[1,2,4,9,10],famili:14,familiar:2,far:2,fashion:14,favor:14,fayol:13,featur:[3,6,8,10,14],fee:14,fell:13,few:[1,2,10],field:[0,2,3,6,7,8,10],file:[1,6,9,10,12,14],fill:[1,9],filter:[2,8],financi:11,find:[0,2,3,7,8,14],finish:9,fire:10,first:[1,2,3,5,6,10,14],fit:[10,14],fix:14,flexibl:[2,11],florent:13,flow:[1,2,9,14],flush:15,follow:[1,2,3,6,9,10,12,14],follow_m2o_rel:2,foo:[1,2],foobar:2,foobarbas:2,footnot:9,for_creat:2,forbid:14,forc:[2,9,10,11,14],form:[1,5,14],format:[2,14],format_item:2,forward:[2,3],found:[2,4,7,14],foundat:14,fr:12,framework:[8,10,12,13],fred:1,free:14,freedom:14,from:[0,1,2,3,5,6,7,8,9,10,12,14,15],from_env:10,fsf:14,fulfil:14,full:[1,11,14],fullnam:1,func:[2,5],func_str:5,fund:13,funder:13,further:[2,14],futur:14,fuzzi:12,g:[2,10],gain:10,gangloff:13,gener:[1,2,5,9,10,11,14],genericadapt:[7,10],genericexport:2,get:[1,2,3,5,7,8,9,10,14],get_channel_by_nam:1,get_channel_from_config:1,get_compon:10,get_connector_unit:10,get_environ:10,get_item:2,get_item_valu:2,get_jobs_to_run:1,get_subchannel_by_nam:1,get_wakeup_tim:1,gettext:12,github:[8,10,11,12],give:[2,5,8,14],given:[1,2,9,10,14],global:[2,3,10],glpi:11,glue:2,gnu:14,go:[1,9,13],goal:14,good:10,googl:11,goran:13,got:11,govern:14,gpl:14,graev:13,grand:13,grant:14,grati:14,greater:[2,9],greatest:14,greatli:10,guarante:14,guewen:[11,13],guid:[6,12],guillaum:13,guillot:13,gusto:13,ha:[1,2,3,4,5,6,7,8,9,10,11,13,14],had:[10,14],halt:9,handl:[1,2,5,10],handler:9,hans:13,happen:[2,3],hardli:10,has_capac:1,have:[0,1,2,3,5,6,9,10,12,14],hearten:14,hello:2,help:[2,15],helper:10,here:[1,2,3,10,12,13,15],hereaft:14,herit:2,hierarchi:[1,9],high:[1,2,8,11],higher:[1,5],highli:7,hint:2,histor:12,hold:[1,2],holder:14,hood:2,hook:[2,8],hope:14,host:[9,14],hour:5,household:14,how:[1,2,3,5,7,8,10,11,14],howev:[2,8,9,14],hsp:13,html:12,http:[8,9,10,12,14],http_auth_password:9,http_auth_us:9,http_interfac:9,http_port:9,htw:13,human:5,i:[0,2,3,7,10],ibo:13,id:[0,2,4,5,6,7,8,10],idea:[10,12,14],ideal:12,ident:5,identifi:[5,14],identity_exact:5,identity_kei:5,idiom:2,idmissinginbackend:4,ie:1,ignor:[1,2],ignore_retri:[2,4],illustr:[1,9],imagin:6,immedi:9,implement:[0,2,3,6,8,11,14],impli:14,implicitli:[2,3,5,10],import_partn:7,import_record:[2,10],importmapchild:2,importmapp:2,impos:14,improv:14,inabl:14,inaccur:14,inc:14,incident:14,includ:[2,14],inclus:14,incorpor:14,increas:[2,5],indemnif:14,independ:14,index:[6,11],indic:[2,5,8,10,14],individu:14,industri:14,infinit:[1,5],info:[3,7,9],infor:11,inform:[2,5,12,14],infring:14,inherit:[0,2,3,5,6,7,8],init:12,initi:[2,5,9,14],inito:13,input_field:2,insert:[1,9],instal:[5,6,9,12,14],instanc:[0,1,2,5,7,8,10],instanci:2,instead:[2,7,10],intact:14,integ:[0,6],integr:10,integrityerror:2,intend:[1,2,14],intent:14,interact:[8,14],interchang:14,interest:[8,14],interf:14,interfac:[1,2,8,14],intermedi:9,internal_data:7,interpret:14,interrupt:9,intim:14,intl:12,introduc:10,introspect:2,invalid:[2,4,14],invaliddataerror:[2,4],invoic:7,ir:5,irrevoc:14,ish:2,itali:13,item:[1,2,14],items_valu:2,iter:1,its:[1,2,5,8,9,10,12,14],itself:[5,6,9,14],j0:1,j1:1,j2:1,j3:1,j4:1,j5:1,j6:1,j7:1,j8:1,jacobi:13,jean:13,jira:11,jo:13,job:[1,2,3,4,11,15],job_function_nam:5,job_record_with_same_identity_kei:5,job_uuid:5,joberror:4,jobrunn:[1,9],jobrunner_db_host:9,jobrunner_db_port:9,join:[1,9],juliu:13,just:[2,3],k:1,keep:[2,14,15],kei:[1,2,3,4,5,9,10,14],kept:[2,5],kernel:14,keyerror:1,keyword:[2,5],kind:[2,3,6,10,11,14],know:[2,7,8,9,10,14],knowingli:14,knowledg:14,known:[2,10],kw:[2,5],kwarg:[2,3,5,7,10],l:12,laetitia:13,lambda:[2,3,10],lang:10,lang_cod:10,languag:[12,14],larger:14,last:[0,12],later:[1,2,4,5,14],latest:12,latter:2,laurent:13,law:14,lawsuit:14,lazili:2,lc_messag:12,lead:14,learn:11,least:[0,1,2,9,14],leav:11,lefev:13,legal:14,len:1,leonardo:[11,13],less:[1,9],let:[1,10,14],level:[1,2,8,9,10],lgpl3:14,lgpl:[6,11,14],liabil:14,liabl:14,librari:14,licens:[6,11],license:14,licensor:14,like:[2,5,9,10,14],likewis:14,limit:[1,2,9,14],line:[1,2,3,8,14],line_id:2,link:[0,2,6,7,8,14],linko:13,list:[1,2,3,5,7,10,11,13,14,15],listen:11,litig:14,ll:[2,3,5,6,7],load:[2,5,9],load_compon:2,local:[12,14],localhost:9,locat:[0,2,6,7],lock:2,lock_nam:2,locker:2,log:[3,9,15],logger:[5,15],logic:[2,13],longer:10,look:[2,6,12],lookup:[2,7,8,10],loss:14,lot:10,low:[2,5],lower:1,luc:[11,13],lue:1,m2o_to_extern:2,m:[2,7],machin:[6,14],made:14,magent:10,magento1700:10,magento1900:10,magento:[0,2,3,6,7,8,10,11,12,13],magento_api:2,magento_backend:0,magento_country_id:2,magento_custom:10,magento_id:[0,2,10],magento_loc:2,magento_uniq:0,magentoapi:2,magentobackend:[0,2,7,10],magentobaseexport:10,magentobind:10,magentoerpconnect:[0,10,12],magentoimport:10,magentoimportmapp:10,magentolisten:10,magentoloc:2,magentopartneradapt:10,magentorespartnercategori:0,magentosaleimport:2,mai:[1,2,6,9,12,14,15],mail:[5,11,14],main:[2,9,10],maintain:[9,11,14],maison:13,major:[11,14],make:[12,14],malt:13,manag:[1,2,9,11],mandatori:[0,2],mani:[2,3,4,8,14],manifest:11,manner:14,manual:[3,5,9,10],many2on:[0,2,6],many_compon:2,manyidsinbackend:4,map:[2,4],map_method:2,map_record:[2,7],mapchild:2,mapper:[6,7,8,10],mappingerror:4,maprecord:2,marcelo:13,march:14,mark:[1,9,13,14],martinelli:13,mask:14,master:9,match:2,materi:14,mathia:13,matter:2,matthieu:13,maurer:[11,13],max_retri:5,maxim:13,maximum:[1,5,9],maxsplit:1,mayb:6,mean:[1,2,5,8,9,14],measur:14,mechan:[1,2],medium:14,meet:14,member:1,memori:[5,9],mention:10,menu:14,merchant:14,mere:14,merg:[12,14,15],messag:[2,5,9],met:14,metaclass:2,metacompon:2,metadata:8,meth:2,method:[2,3,5,6,8,10,14],micro:7,might:[2,6,10],mignon:13,migrat:11,mind:13,minimum:2,minut:5,misrepresent:14,miss:[1,2],mix:10,mixin:5,mkdir:12,mo:12,mode:14,model:[7,8,11,14],model_nam:[2,5,7,10],modif:14,modifi:[2,8,12,14],modul:[0,1,2,5,6,8,9,10,11,12],modular:11,monitor:11,monk:13,more:[1,2,8,10,12,14,15],moreov:14,most:[2,12,14],mostli:8,mr:13,msg:4,multi:[7,10],multilevel:2,must:[0,1,2,3,5,6,8,9,10,14],mute:5,mute_logg:5,my:[2,3,6,7,10,12],my_backend_bind_id:2,my_backend_product_product_odoo_uniq:2,mybind:10,mycompon:2,myeventlisten:[2,3,7],myfield:2,mymodeleventlisten:3,mypartneradapt:10,myproductimportmapp:10,myself:6,n:[1,2,5],name:[1,2,3,5,6,7,8,9,10,11,14],namespac:[2,5,10],natur:14,ndp:13,necessari:[1,6,8,14],need:[0,2,6,7,8,10,12,14],neither:14,network:[4,13,14],networkretryableerror:4,never:[2,10],next:[1,7,9,14],nicola:13,no_connector_export:[2,10],nocomponenterror:2,noconnectoruniterror:4,noexternalid:4,non:[1,14],noncommerci:14,none:[1,2,3,4,5,7,9,10],nor:14,normal:[1,2,5,9,10,14],notabl:10,notat:[1,5],note:[1,5,6,8,9],noth:[6,14],notic:14,notif:3,notifi:[1,2,7,9,10,14],notwithstand:14,novemb:14,now:[1,2,5,10,11],nowait:2,number:[2,5,6,14],nv:13,o:[1,12],object:[1,2,5,14],oblig:14,observ:[1,3,8,9],obvious:[9,10],oca:[6,8,10,12],occasion:14,occur:[4,14,15],odoo:[0,1,2,4,5,7,8,9,10,12],odoo_id:[0,2,6],odoo_queue_job_channel:9,odoo_queue_job_host:9,odoo_queue_job_http_auth_password:9,odoo_queue_job_http_auth_us:9,odoo_queue_job_jobrunner_db_host:9,odoo_queue_job_jobrunner_db_port:9,odoo_queue_job_port:9,odoo_queue_job_schem:9,offer:14,offici:14,old:10,older:14,olivi:13,omit:[1,7],on_:10,on_foo_cr:3,on_invoice_paid:7,on_record_cr:[3,10],on_record_unlink:3,on_record_writ:[2,3],on_someth:10,onc:[2,3],ondelet:[0,6],one2mani:2,one:[1,2,3,5,7,8,10,14],one_th:5,ones:[2,5,10],onli:[1,2,3,8,9,11,14],only_cr:2,op:1,open2bizz:13,open:[5,11],openbig:13,openerp:11,oper:14,opportun:14,option:[1,2,5,9,10,14],orchestr:[2,8],order:[2,6,8,9,13,14],ordereddict:2,org:[12,14],organ:[2,14],origin:14,oscommerc:11,other:[1,2,3,6,7,9,10,11,14],otherwis:[3,9,14],our:[2,6,7,10,14],out:[2,13,14],outdat:6,output:[2,14],output_field:2,output_valu:2,outsid:14,over:[1,2,10],overflow:[1,9],overhaul:11,overrid:[2,5],overridden:2,overview:11,own:[2,6,8,10,11,14],p:12,packag:14,page:11,paid:7,paper:14,paragraph:14,parallel:9,paramet:[1,2,5,10],parent:[1,2,5,7,9,10],pars:[1,15],parse_simple_config:1,part:[8,10,14],parti:14,particular:[2,14],partner:[0,2,5,7,8,10,13],partner_id:[5,7],partneradapt:[7,10],partneradapter1700:10,partneradapter1900:10,partneradapterfactori:10,partnerbind:7,partnerimport:7,partnermapp:7,pass:[1,2,5,8,9,10],password:[0,2,6,7,14],past:1,patch:12,patent:14,path:[2,10],pattern:[3,5,8],payment:[7,14],peer:14,pend:[1,2,5,9],perfect:10,perform:[5,14],perman:14,permiss:14,permit:14,perpetu:14,person:[12,14],pertin:14,peter:13,pg_try_advisory_lock:2,physic:14,pick:10,piec:[2,8,11,12,14],piganeau:13,pipelin:2,piston:[11,13],place:[3,5,14],pleas:6,pleasur:12,plu:14,plug:8,pluggabl:8,po:12,poedit:12,point:[1,2,8,9,10],pointer:[8,14],poor:6,pop:1,popul:9,port:9,portion:14,possess:14,possibl:[1,2,5,9,14],postgr:[2,9],postpon:5,pot:12,power:[11,14],pp:1,pprint:1,practic:14,preambl:14,preced:2,precis:[2,3,10,14],predecessor:14,prefer:[10,14],prefix:10,prepar:2,prerequisit:8,presenc:1,present:[1,14],preserv:14,prestashop:[6,11,12],prestashoperpconnect:12,prevent:[2,9,14],previou:[1,2,10,14],previous:10,price:14,primarili:14,print:[2,10],prior:14,prioriti:[1,2,5,7,9,10],prioritis:1,priorityqueu:1,privat:14,pro:2,probabl:[6,8,12],problem:[2,14],proce:2,procedur:14,process:[5,9,11],procur:14,produc:14,product:[0,2,5,9,10,14],product_id:2,product_tmpl_id:2,productimportmapp:10,productproduct:5,program:14,programm:14,prohibit:14,project:[6,12],promin:14,propag:[2,14],properti:[1,2,5,9,14],propos:[2,8,11,12],protect:14,protocol:[2,8,14],prove:14,provid:[2,5,14],provis:14,provision:14,proxi:14,public_buildbot_buildout:12,publicli:[2,14],publish:14,pull:12,purpos:[2,5,9,10,14],pursuant:14,push:2,put:[1,2,6,8,10],py:[0,6,12],python:[2,3,5,6,10,12],q:[1,9],qualifi:14,qualiti:14,quantiti:2,queue:[1,6,7,9,10,11],queue_job:[1,2,4,5,6,7,8,9,10],queuejob:5,r:[1,3,9],rais:[1,2,5,13],random:2,rapidli:11,rare:2,rather:[2,11],raw:[2,12],re:[0,2,3,5,7,8,10],reach:1,read:[2,5,7,8,12,14],readabl:[1,14],readi:[1,2,9],readili:14,readm:5,real:[5,6],realli:[2,8],reason:[2,12,14],rebuild:12,rebuilt:2,receipt:14,receiv:[9,14],recip:9,recipi:14,recogn:[10,14],recommend:10,record:[0,2,3,5,6,7,8,10],record_id:10,recordlock:2,recordset:[2,5],recreat:2,redefin:10,redistribut:14,redmin:11,ref:7,refer:[6,8,10,14],refin:8,refrain:14,regard:[10,14],regardless:14,regener:14,regist:[2,8],registr:2,registri:2,reimplement:2,reinstat:14,reject:2,rel:0,rel_id:2,relat:[0,2,3,5,8,10],related_act:[5,10],related_action_magento_link:10,related_action_partn:5,related_action_product:5,related_action_unwrap_bind:10,relationship:[2,14],releas:14,relev:14,reli:14,relicens:14,remain:[9,14],remot:14,remov:[1,10,14],remove_db:1,remove_job:1,render:14,repair:14,repeat:[10,12],replac:[1,2,15],report:12,repositori:[6,10],repres:[2,6,8,14],represent:5,request:[9,11,12],requeu:9,requir:[0,2,6,7,10,14],res_id:5,res_model:5,reset_retri:5,resolv:14,respartn:5,respect:[2,12,14],respond:3,respons:[2,14],restart:9,restrict:[0,3,6,14],result:[2,5,12,14],retain:14,retri:[2,4,5],retry_count:5,retry_eta_second:5,retry_interv:5,retry_pattern:5,retry_second:2,retryabl:5,retryable_exampl:5,retryablejoberror:[2,4,5],reus:12,review:[8,14],revis:14,rewritten:10,right:[10,14],risk:[1,9,14],roadmap:11,robust:11,rollback:2,rom:14,room:[1,9],root:[1,5,9,10],rove:13,royalti:14,rpc:2,rst:5,rtype:7,rule:[1,2,14],run:[1,2,5,7,9,10,14],runjob:9,runner:[1,11],s1:1,s2:1,s3:1,s3cr3t:9,s:[1,2,5,7,8,10,12,13,14],safe:9,safeset:1,safest:14,sai:[1,8,10,14],sake:[6,7],sale:[2,8,14],salesforc:11,same:[0,1,2,3,5,7,8,9,10,12,14],sane:12,satisfi:14,schedul:[1,2],scheme:9,school:14,scope:14,script:14,search:[2,7,8,10,11],search_read:2,sebastien:13,second:[1,2,4,5,9],secondari:14,secondarili:14,section:14,secur:9,see:[2,3,5,6,8,11,12,14],seen:2,segreg:2,select:[0,10],select_vers:10,self:[0,2,3,5,7,10],sell:14,semiconductor:14,sent:[1,3,9],sep:1,separ:[1,2,14],seq:1,sequenc:[1,9],sequenti:[1,9],serv:[2,14],server:[9,14],server_wide_modul:9,servic:[6,8,11,13,14],session:[2,10],set:[1,2,3,5,9,11],set_don:[1,5],set_enqueu:5,set_fail:[1,5],set_pend:[1,5],set_run:1,set_start:5,sever:[2,8,10,11],severalcomponenterror:2,shall:14,share:[2,6,8,10,14],shell:2,shop:13,shortcut:2,should:[1,2,3,6,9,10,12,14],show:10,shut:9,side:[2,3,6],sign:14,signific:14,similar:[10,14],simpl:[1,7],simple_configur:1,simpli:5,simplifi:7,simultan:14,sinc:[1,9],sing:2,singl:[2,5,14],situat:9,size:2,skip:[2,3],skip_if:[2,3,10],skip_item:2,small:[2,8],smaller:1,smile:13,so10:2,so:[1,2,3,6,7,9,10,14,15],softwar:[11,13,14],sold:14,sole:14,solut:[13,14],some:[1,2,6,7,8,14],someth:[2,3,8],soon:5,sorting_kei:1,sorting_key_ignoring_eta:1,sourc:[0,1,2,3,4,5,8,9,11,12,14],spare:14,spawn:2,speak:[2,7,8,14],special:[2,6,14],specif:[2,5,10,14],specifi:[2,5,14],sphinx:12,sphinx_bootstrap_them:12,sphinxopt:12,spirit:14,split:[1,10],split_strip:1,spreadsheet:11,spree:11,sq:1,sql:9,stage:1,stai:10,stale:9,standalon:[8,10],standard:14,standpoint:9,start:[1,2,5,9,10,11,14],start_odoo:12,state:[1,2,5,9,14],statement:[9,14],statu:14,step:[6,12,14],still:[1,2,10],stock:10,stop:[2,9,12],storag:14,store:[2,5,8],str:[2,5],street:2,strictli:2,string:[0,1,2,5,6,7],strip:1,structur:1,sub:[1,2,8,9],subchannel:[1,5,9],subchannel_nam:1,subclass:[2,10],subdivid:14,subject:14,sublicens:14,submap:[2,8],submit:12,subprogram:14,subscrib:[2,7,11],subsect:14,subsequ:5,substanti:14,succeed:15,sue:14,suffic:14,sugarcrm:11,suggest:2,suit:1,sunjka:13,supplement:14,suppli:13,support:[1,2,8,10,12,14],sure:[2,9,14],surrend:14,surviv:14,sustain:14,suzann:13,sync:[2,7],sync_dat:[0,2],synchron:[0,5,6,7,15],synchronis:2,syntax:9,system:[1,2,3,8,9,14],t1:1,t2:1,t3:1,t:[1,3,10],tabl:9,tag:0,take:[2,3,5,6,14],taktik:13,tangibl:14,target:2,target_field:2,task:[2,5,10,11],tax:0,tax_class_id:0,tax_includ:2,techniqu:[1,9],technolog:14,tell:14,term:14,termin:14,test:[1,5],test_queue_job_no_delai:5,than:[1,2,3,5,7,9,10,14],thank:[11,13],the_method:5,the_thing_to_export:5,thei:[1,2,5,7,8,9,10,14],them:[1,2,8,9,10,13,14,15],themselv:0,therefor:[9,14],thi:[0,1,2,3,5,6,7,8,9,10,11,14],thing:[3,6,14,15],third:14,thoma:13,those:14,though:[1,2,14],thread:[5,9],three:[10,14],throttl:[1,9],through:[2,5,6,8,9,14],throughout:2,thu:[2,14],ticket:11,time:[1,2,3,4,5,7,9,14],tip:[9,12],to_attr:2,to_extern:2,to_intern:[2,7],togeth:[1,8,9],too:[6,9],tool:14,total:[8,10],traceback:5,track:10,tracker:11,trade:14,trademark:14,trail:1,transact:[2,14],transfer:14,transform:[2,4,8],translat:[2,8],transmiss:14,transmit:5,transport:2,transvers:[2,8],treat:14,treati:14,trigger:[2,3,11],tutori:8,two:[1,2,9,14],type:[2,5,11,12],typic:[2,14],under:[2,14],unicod:2,uniqu:[0,2,4,5],unit:[2,10],unit_for:10,unless:[2,14],unlimit:[9,14],unlink:3,unmodifi:14,unnecessari:14,unpack:14,unset:[5,9],until:[1,2,10,12,14],unwrap:2,unwrap_bind:[2,10],unwrap_model:2,up:[5,9,10],updat:[2,7,9,12,14],upon:2,upper:2,upstream:[1,9,12],us:[0,1,2,3,5,6,7,8,10,11,12,13,14],usabl:2,usag:[2,5,7,8,10],user:[2,3,5,8,14],user_id:5,usernam:[0,2,6,7],usual:[2,5,10],utf:6,utter:2,uuid:[1,5],v:1,va:1,val:[3,10],valid:14,valu:[1,2,5,7,9],vari:6,variabl:9,vaucher:13,verbatim:14,vernichon:13,version:[0,6,7,11,14],via:0,view:[1,5,8,9,14],view_mod:5,view_typ:5,violat:[2,14],visibl:14,visual:[1,9],vocal:2,voicent:11,volum:14,volumetri:11,vuillard:13,wa:[5,10,14],wai:[8,9,10,14],wait:[1,9],waiv:14,waiver:14,wakeup:1,wakeup_tim:1,want:[2,3,5,6,8,10,14],warehous:2,warehouse_id:2,warranti:14,water:[1,9],we:[1,2,3,5,6,7,8,10,12,14,15],web:[9,14],web_kanban:9,well:[2,8,10,14],were:14,wget:12,what:[2,8,10,11,14],whatev:14,when:[1,2,3,5,6,8,9,10,14,15],whenev:[1,9],where:[1,2,3,5,6,8,9,14],wherein:5,whether:14,which:[0,1,2,3,5,7,8,9,10,12,14,15],whitespac:1,who:[2,14],whole:14,whom:14,whose:14,wide:[8,14],widespread:14,willowit:13,window:14,wipo:14,wish:14,with_delai:[2,3,5,7,10],within:[2,10,14],without:[1,2,7,9,10,14],won:10,wordpress:11,work2:2,work:[1,2,5,8,11,14],work_context:2,work_on:[2,7,8,10],workcontext:[2,10,11],worker:[2,9],working_context:2,world:2,worldwid:14,would:[0,1,2,3,14],wrap:2,write:[2,3,5,7,8,14],written:[8,14],www:14,xml:5,xxx:[2,12],yannick:13,ye:7,year:[10,13,14],yell:2,yet:5,yield:[1,2],you:[0,2,3,5,6,8,9,10,12,14],your:[2,8,9,10,11,14],yourself:14,zabbix:11},titles:["Models","Channels","Components","Events","Exceptions","Queue","Boostrapping a connector","Code Overview","Connector Concepts","Configuring channels and the job runner","Migration Guide to the new Connector API","Odoo Connector","Contribute","Contributors","License","Roadmap"],titleterms:{"abstract":6,"new":[10,12],adapt:[2,8],after:10,an:[7,10],api:[10,11],asynchron:7,backend:[0,2,6,8,10],base:[2,3,11],befor:10,bind:[0,6,8],binder:[2,8],boostrap:6,builder:2,caveat:9,channel:[1,9],checkpoint:8,code:7,collect:[2,3],compon:[2,3,6,7,8,10],concept:8,configur:9,connector:[2,6,8,10,11,12],contribut:12,contributor:13,convent:12,core:[2,11],creat:12,declar:10,decor:5,delai:7,develop:11,doc:12,doe:9,entrypoint:10,event:[3,7,8,10],except:[2,4],extens:3,featur:11,financi:13,find:10,framework:11,guid:[10,11],hint:10,how:9,indic:11,inherit:10,intern:[2,5],invoc:10,job:[5,7,8,9,10],licens:14,link:10,listen:[2,3,7,8,10],maintain:12,manifest:6,map:8,mapper:2,migrat:10,model:[0,2,3,5,6,10],name:12,notifi:3,observ:10,odoo:[3,6,11],onli:10,overview:7,project:11,queue:[5,8],refer:11,replac:10,roadmap:15,runner:9,s:11,section:10,some:10,start:12,synchron:[2,8],tabl:11,talk:11,thi:12,translat:12,trigger:[7,10],unregist:10,us:9,variou:10,version:10,want:12,what:9,work:[7,9,10],workcontext:8}})