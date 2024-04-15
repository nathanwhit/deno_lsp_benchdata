import {Request} from '../lib/request.d.ts';
import {Response} from '../lib/response.d.ts';
import {AWSError} from '../lib/error.d.ts';
import {Service} from '../lib/service.d.ts';
import {ServiceConfigurationOptions} from '../lib/service.d.ts';
import {ConfigBase as Config} from '../lib/config-base.d.ts';
interface Blob {}
declare class DataExchange extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DataExchange.Types.ClientConfiguration)
  config: Config & DataExchange.Types.ClientConfiguration;
  /**
   * This operation cancels a job. Jobs can be cancelled only when they are in the WAITING state.
   */
  cancelJob(params: DataExchange.Types.CancelJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation cancels a job. Jobs can be cancelled only when they are in the WAITING state.
   */
  cancelJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation creates a data set.
   */
  createDataSet(params: DataExchange.Types.CreateDataSetRequest, callback?: (err: AWSError, data: DataExchange.Types.CreateDataSetResponse) => void): Request<DataExchange.Types.CreateDataSetResponse, AWSError>;
  /**
   * This operation creates a data set.
   */
  createDataSet(callback?: (err: AWSError, data: DataExchange.Types.CreateDataSetResponse) => void): Request<DataExchange.Types.CreateDataSetResponse, AWSError>;
  /**
   * This operation creates an event action.
   */
  createEventAction(params: DataExchange.Types.CreateEventActionRequest, callback?: (err: AWSError, data: DataExchange.Types.CreateEventActionResponse) => void): Request<DataExchange.Types.CreateEventActionResponse, AWSError>;
  /**
   * This operation creates an event action.
   */
  createEventAction(callback?: (err: AWSError, data: DataExchange.Types.CreateEventActionResponse) => void): Request<DataExchange.Types.CreateEventActionResponse, AWSError>;
  /**
   * This operation creates a job.
   */
  createJob(params: DataExchange.Types.CreateJobRequest, callback?: (err: AWSError, data: DataExchange.Types.CreateJobResponse) => void): Request<DataExchange.Types.CreateJobResponse, AWSError>;
  /**
   * This operation creates a job.
   */
  createJob(callback?: (err: AWSError, data: DataExchange.Types.CreateJobResponse) => void): Request<DataExchange.Types.CreateJobResponse, AWSError>;
  /**
   * This operation creates a revision for a data set.
   */
  createRevision(params: DataExchange.Types.CreateRevisionRequest, callback?: (err: AWSError, data: DataExchange.Types.CreateRevisionResponse) => void): Request<DataExchange.Types.CreateRevisionResponse, AWSError>;
  /**
   * This operation creates a revision for a data set.
   */
  createRevision(callback?: (err: AWSError, data: DataExchange.Types.CreateRevisionResponse) => void): Request<DataExchange.Types.CreateRevisionResponse, AWSError>;
  /**
   * This operation deletes an asset.
   */
  deleteAsset(params: DataExchange.Types.DeleteAssetRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation deletes an asset.
   */
  deleteAsset(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation deletes a data set.
   */
  deleteDataSet(params: DataExchange.Types.DeleteDataSetRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation deletes a data set.
   */
  deleteDataSet(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation deletes the event action.
   */
  deleteEventAction(params: DataExchange.Types.DeleteEventActionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation deletes the event action.
   */
  deleteEventAction(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation deletes a revision.
   */
  deleteRevision(params: DataExchange.Types.DeleteRevisionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation deletes a revision.
   */
  deleteRevision(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation returns information about an asset.
   */
  getAsset(params: DataExchange.Types.GetAssetRequest, callback?: (err: AWSError, data: DataExchange.Types.GetAssetResponse) => void): Request<DataExchange.Types.GetAssetResponse, AWSError>;
  /**
   * This operation returns information about an asset.
   */
  getAsset(callback?: (err: AWSError, data: DataExchange.Types.GetAssetResponse) => void): Request<DataExchange.Types.GetAssetResponse, AWSError>;
  /**
   * This operation returns information about a data set.
   */
  getDataSet(params: DataExchange.Types.GetDataSetRequest, callback?: (err: AWSError, data: DataExchange.Types.GetDataSetResponse) => void): Request<DataExchange.Types.GetDataSetResponse, AWSError>;
  /**
   * This operation returns information about a data set.
   */
  getDataSet(callback?: (err: AWSError, data: DataExchange.Types.GetDataSetResponse) => void): Request<DataExchange.Types.GetDataSetResponse, AWSError>;
  /**
   * This operation retrieves information about an event action.
   */
  getEventAction(params: DataExchange.Types.GetEventActionRequest, callback?: (err: AWSError, data: DataExchange.Types.GetEventActionResponse) => void): Request<DataExchange.Types.GetEventActionResponse, AWSError>;
  /**
   * This operation retrieves information about an event action.
   */
  getEventAction(callback?: (err: AWSError, data: DataExchange.Types.GetEventActionResponse) => void): Request<DataExchange.Types.GetEventActionResponse, AWSError>;
  /**
   * This operation returns information about a job.
   */
  getJob(params: DataExchange.Types.GetJobRequest, callback?: (err: AWSError, data: DataExchange.Types.GetJobResponse) => void): Request<DataExchange.Types.GetJobResponse, AWSError>;
  /**
   * This operation returns information about a job.
   */
  getJob(callback?: (err: AWSError, data: DataExchange.Types.GetJobResponse) => void): Request<DataExchange.Types.GetJobResponse, AWSError>;
  /**
   * This operation returns information about a revision.
   */
  getRevision(params: DataExchange.Types.GetRevisionRequest, callback?: (err: AWSError, data: DataExchange.Types.GetRevisionResponse) => void): Request<DataExchange.Types.GetRevisionResponse, AWSError>;
  /**
   * This operation returns information about a revision.
   */
  getRevision(callback?: (err: AWSError, data: DataExchange.Types.GetRevisionResponse) => void): Request<DataExchange.Types.GetRevisionResponse, AWSError>;
  /**
   * This operation lists a data set's revisions sorted by CreatedAt in descending order.
   */
  listDataSetRevisions(params: DataExchange.Types.ListDataSetRevisionsRequest, callback?: (err: AWSError, data: DataExchange.Types.ListDataSetRevisionsResponse) => void): Request<DataExchange.Types.ListDataSetRevisionsResponse, AWSError>;
  /**
   * This operation lists a data set's revisions sorted by CreatedAt in descending order.
   */
  listDataSetRevisions(callback?: (err: AWSError, data: DataExchange.Types.ListDataSetRevisionsResponse) => void): Request<DataExchange.Types.ListDataSetRevisionsResponse, AWSError>;
  /**
   * This operation lists your data sets. When listing by origin OWNED, results are sorted by CreatedAt in descending order. When listing by origin ENTITLED, there is no order and the maxResults parameter is ignored.
   */
  listDataSets(params: DataExchange.Types.ListDataSetsRequest, callback?: (err: AWSError, data: DataExchange.Types.ListDataSetsResponse) => void): Request<DataExchange.Types.ListDataSetsResponse, AWSError>;
  /**
   * This operation lists your data sets. When listing by origin OWNED, results are sorted by CreatedAt in descending order. When listing by origin ENTITLED, there is no order and the maxResults parameter is ignored.
   */
  listDataSets(callback?: (err: AWSError, data: DataExchange.Types.ListDataSetsResponse) => void): Request<DataExchange.Types.ListDataSetsResponse, AWSError>;
  /**
   * This operation lists your event actions.
   */
  listEventActions(params: DataExchange.Types.ListEventActionsRequest, callback?: (err: AWSError, data: DataExchange.Types.ListEventActionsResponse) => void): Request<DataExchange.Types.ListEventActionsResponse, AWSError>;
  /**
   * This operation lists your event actions.
   */
  listEventActions(callback?: (err: AWSError, data: DataExchange.Types.ListEventActionsResponse) => void): Request<DataExchange.Types.ListEventActionsResponse, AWSError>;
  /**
   * This operation lists your jobs sorted by CreatedAt in descending order.
   */
  listJobs(params: DataExchange.Types.ListJobsRequest, callback?: (err: AWSError, data: DataExchange.Types.ListJobsResponse) => void): Request<DataExchange.Types.ListJobsResponse, AWSError>;
  /**
   * This operation lists your jobs sorted by CreatedAt in descending order.
   */
  listJobs(callback?: (err: AWSError, data: DataExchange.Types.ListJobsResponse) => void): Request<DataExchange.Types.ListJobsResponse, AWSError>;
  /**
   * This operation lists a revision's assets sorted alphabetically in descending order.
   */
  listRevisionAssets(params: DataExchange.Types.ListRevisionAssetsRequest, callback?: (err: AWSError, data: DataExchange.Types.ListRevisionAssetsResponse) => void): Request<DataExchange.Types.ListRevisionAssetsResponse, AWSError>;
  /**
   * This operation lists a revision's assets sorted alphabetically in descending order.
   */
  listRevisionAssets(callback?: (err: AWSError, data: DataExchange.Types.ListRevisionAssetsResponse) => void): Request<DataExchange.Types.ListRevisionAssetsResponse, AWSError>;
  /**
   * This operation lists the tags on the resource.
   */
  listTagsForResource(params: DataExchange.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: DataExchange.Types.ListTagsForResourceResponse) => void): Request<DataExchange.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * This operation lists the tags on the resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: DataExchange.Types.ListTagsForResourceResponse) => void): Request<DataExchange.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * This operation revokes subscribers' access to a revision.
   */
  revokeRevision(params: DataExchange.Types.RevokeRevisionRequest, callback?: (err: AWSError, data: DataExchange.Types.RevokeRevisionResponse) => void): Request<DataExchange.Types.RevokeRevisionResponse, AWSError>;
  /**
   * This operation revokes subscribers' access to a revision.
   */
  revokeRevision(callback?: (err: AWSError, data: DataExchange.Types.RevokeRevisionResponse) => void): Request<DataExchange.Types.RevokeRevisionResponse, AWSError>;
  /**
   * This operation invokes an API Gateway API asset. The request is proxied to the provider’s API Gateway API.
   */
  sendApiAsset(params: DataExchange.Types.SendApiAssetRequest, callback?: (err: AWSError, data: DataExchange.Types.SendApiAssetResponse) => void): Request<DataExchange.Types.SendApiAssetResponse, AWSError>;
  /**
   * This operation invokes an API Gateway API asset. The request is proxied to the provider’s API Gateway API.
   */
  sendApiAsset(callback?: (err: AWSError, data: DataExchange.Types.SendApiAssetResponse) => void): Request<DataExchange.Types.SendApiAssetResponse, AWSError>;
  /**
   * The type of event associated with the data set.
   */
  sendDataSetNotification(params: DataExchange.Types.SendDataSetNotificationRequest, callback?: (err: AWSError, data: DataExchange.Types.SendDataSetNotificationResponse) => void): Request<DataExchange.Types.SendDataSetNotificationResponse, AWSError>;
  /**
   * The type of event associated with the data set.
   */
  sendDataSetNotification(callback?: (err: AWSError, data: DataExchange.Types.SendDataSetNotificationResponse) => void): Request<DataExchange.Types.SendDataSetNotificationResponse, AWSError>;
  /**
   * This operation starts a job.
   */
  startJob(params: DataExchange.Types.StartJobRequest, callback?: (err: AWSError, data: DataExchange.Types.StartJobResponse) => void): Request<DataExchange.Types.StartJobResponse, AWSError>;
  /**
   * This operation starts a job.
   */
  startJob(callback?: (err: AWSError, data: DataExchange.Types.StartJobResponse) => void): Request<DataExchange.Types.StartJobResponse, AWSError>;
  /**
   * This operation tags a resource.
   */
  tagResource(params: DataExchange.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation tags a resource.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation removes one or more tags from a resource.
   */
  untagResource(params: DataExchange.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation removes one or more tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation updates an asset.
   */
  updateAsset(params: DataExchange.Types.UpdateAssetRequest, callback?: (err: AWSError, data: DataExchange.Types.UpdateAssetResponse) => void): Request<DataExchange.Types.UpdateAssetResponse, AWSError>;
  /**
   * This operation updates an asset.
   */
  updateAsset(callback?: (err: AWSError, data: DataExchange.Types.UpdateAssetResponse) => void): Request<DataExchange.Types.UpdateAssetResponse, AWSError>;
  /**
   * This operation updates a data set.
   */
  updateDataSet(params: DataExchange.Types.UpdateDataSetRequest, callback?: (err: AWSError, data: DataExchange.Types.UpdateDataSetResponse) => void): Request<DataExchange.Types.UpdateDataSetResponse, AWSError>;
  /**
   * This operation updates a data set.
   */
  updateDataSet(callback?: (err: AWSError, data: DataExchange.Types.UpdateDataSetResponse) => void): Request<DataExchange.Types.UpdateDataSetResponse, AWSError>;
  /**
   * This operation updates the event action.
   */
  updateEventAction(params: DataExchange.Types.UpdateEventActionRequest, callback?: (err: AWSError, data: DataExchange.Types.UpdateEventActionResponse) => void): Request<DataExchange.Types.UpdateEventActionResponse, AWSError>;
  /**
   * This operation updates the event action.
   */
  updateEventAction(callback?: (err: AWSError, data: DataExchange.Types.UpdateEventActionResponse) => void): Request<DataExchange.Types.UpdateEventActionResponse, AWSError>;
  /**
   * This operation updates a revision.
   */
  updateRevision(params: DataExchange.Types.UpdateRevisionRequest, callback?: (err: AWSError, data: DataExchange.Types.UpdateRevisionResponse) => void): Request<DataExchange.Types.UpdateRevisionResponse, AWSError>;
  /**
   * This operation updates a revision.
   */
  updateRevision(callback?: (err: AWSError, data: DataExchange.Types.UpdateRevisionResponse) => void): Request<DataExchange.Types.UpdateRevisionResponse, AWSError>;
}
declare namespace DataExchange {
  export interface Action {
    /**
     * Details for the export revision to Amazon S3 action.
     */
    ExportRevisionToS3?: AutoExportRevisionToS3RequestDetails;
  }
  export type ApiDescription = string;
  export interface ApiGatewayApiAsset {
    /**
     * The API description of the API asset.
     */
    ApiDescription?: ApiDescription;
    /**
     * The API endpoint of the API asset.
     */
    ApiEndpoint?: __string;
    /**
     * The unique identifier of the API asset.
     */
    ApiId?: __string;
    /**
     * The API key of the API asset.
     */
    ApiKey?: __string;
    /**
     * The API name of the API asset.
     */
    ApiName?: __string;
    /**
     * The download URL of the API specification of the API asset.
     */
    ApiSpecificationDownloadUrl?: __string;
    /**
     * The date and time that the upload URL expires, in ISO 8601 format.
     */
    ApiSpecificationDownloadUrlExpiresAt?: Timestamp;
    /**
     * The protocol type of the API asset.
     */
    ProtocolType?: ProtocolType;
    /**
     * The stage of the API asset.
     */
    Stage?: __string;
  }
  export type Arn = string;
  export interface AssetDestinationEntry {
    /**
     * The unique identifier for the asset.
     */
    AssetId: Id;
    /**
     * The Amazon S3 bucket that is the destination for the asset.
     */
    Bucket: __string;
    /**
     * The name of the object in Amazon S3 for the asset.
     */
    Key?: __string;
  }
  export interface AssetDetails {
    /**
     * The Amazon S3 object that is the asset.
     */
    S3SnapshotAsset?: S3SnapshotAsset;
    /**
     * The Amazon Redshift datashare that is the asset.
     */
    RedshiftDataShareAsset?: RedshiftDataShareAsset;
    /**
     * Information about the API Gateway API asset.
     */
    ApiGatewayApiAsset?: ApiGatewayApiAsset;
    /**
     * The Amazon S3 data access that is the asset.
     */
    S3DataAccessAsset?: S3DataAccessAsset;
    /**
     * The AWS Lake Formation data permission that is the asset.
     */
    LakeFormationDataPermissionAsset?: LakeFormationDataPermissionAsset;
  }
  export interface AssetEntry {
    /**
     * The ARN for the asset.
     */
    Arn: Arn;
    /**
     * Details about the asset.
     */
    AssetDetails: AssetDetails;
    /**
     * The type of asset that is added to a data set.
     */
    AssetType: AssetType;
    /**
     * The date and time that the asset was created, in ISO 8601 format.
     */
    CreatedAt: Timestamp;
    /**
     * The unique identifier for the data set associated with this asset.
     */
    DataSetId: Id;
    /**
     * The unique identifier for the asset.
     */
    Id: Id;
    /**
     * The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in LF-tag policy" or "Table(s) included in LF-tag policy" are used as the asset name.
     */
    Name: AssetName;
    /**
     * The unique identifier for the revision associated with this asset.
     */
    RevisionId: Id;
    /**
     * The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.
     */
    SourceId?: Id;
    /**
     * The date and time that the asset was last updated, in ISO 8601 format.
     */
    UpdatedAt: Timestamp;
  }
  export type AssetName = string;
  export interface AssetSourceEntry {
    /**
     * The Amazon S3 bucket that's part of the source of the asset.
     */
    Bucket: __string;
    /**
     * The name of the object in Amazon S3 for the asset.
     */
    Key: __string;
  }
  export type AssetType = "S3_SNAPSHOT"|"REDSHIFT_DATA_SHARE"|"API_GATEWAY_API"|"S3_DATA_ACCESS"|"LAKE_FORMATION_DATA_PERMISSION"|string;
  export interface AutoExportRevisionDestinationEntry {
    /**
     * The Amazon S3 bucket that is the destination for the event action.
     */
    Bucket: __string;
    /**
     * A string representing the pattern for generated names of the individual assets in the revision. For more information about key patterns, see Key patterns when exporting revisions.
     */
    KeyPattern?: __string;
  }
  export interface AutoExportRevisionToS3RequestDetails {
    /**
     * Encryption configuration for the auto export job.
     */
    Encryption?: ExportServerSideEncryption;
    /**
     * A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.
     */
    RevisionDestination: AutoExportRevisionDestinationEntry;
  }
  export type AwsAccountId = string;
  export interface CancelJobRequest {
    /**
     * The unique identifier for a job.
     */
    JobId: __string;
  }
  export type ClientToken = string;
  export type Code = "ACCESS_DENIED_EXCEPTION"|"INTERNAL_SERVER_EXCEPTION"|"MALWARE_DETECTED"|"RESOURCE_NOT_FOUND_EXCEPTION"|"SERVICE_QUOTA_EXCEEDED_EXCEPTION"|"VALIDATION_EXCEPTION"|"MALWARE_SCAN_ENCRYPTED_FILE"|string;
  export interface CreateDataSetRequest {
    /**
     * The type of asset that is added to a data set.
     */
    AssetType: AssetType;
    /**
     * A description for the data set. This value can be up to 16,348 characters long.
     */
    Description: Description;
    /**
     * The name of the data set.
     */
    Name: Name;
    /**
     * A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.
     */
    Tags?: MapOf__string;
  }
  export interface CreateDataSetResponse {
    /**
     * The ARN for the data set.
     */
    Arn?: Arn;
    /**
     * The type of asset that is added to a data set.
     */
    AssetType?: AssetType;
    /**
     * The date and time that the data set was created, in ISO 8601 format.
     */
    CreatedAt?: Timestamp;
    /**
     * The description for the data set.
     */
    Description?: Description;
    /**
     * The unique identifier for the data set.
     */
    Id?: Id;
    /**
     * The name of the data set.
     */
    Name?: Name;
    /**
     * A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).
     */
    Origin?: Origin;
    /**
     * If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.
     */
    OriginDetails?: OriginDetails;
    /**
     * The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.
     */
    SourceId?: Id;
    /**
     * The tags for the data set.
     */
    Tags?: MapOf__string;
    /**
     * The date and time that the data set was last updated, in ISO 8601 format.
     */
    UpdatedAt?: Timestamp;
  }
  export interface CreateEventActionRequest {
    /**
     * What occurs after a certain event.
     */
    Action: Action;
    /**
     * What occurs to start an action.
     */
    Event: Event;
  }
  export interface CreateEventActionResponse {
    /**
     * What occurs after a certain event.
     */
    Action?: Action;
    /**
     * The ARN for the event action.
     */
    Arn?: Arn;
    /**
     * The date and time that the event action was created, in ISO 8601 format.
     */
    CreatedAt?: Timestamp;
    /**
     * What occurs to start an action.
     */
    Event?: Event;
    /**
     * The unique identifier for the event action.
     */
    Id?: Id;
    /**
     * The date and time that the event action was last updated, in ISO 8601 format.
     */
    UpdatedAt?: Timestamp;
  }
  export interface CreateJobRequest {
    /**
     * The details for the CreateJob request.
     */
    Details: RequestDetails;
    /**
     * The type of job to be created.
     */
    Type: Type;
  }
  export interface CreateJobResponse {
    /**
     * The ARN for the job.
     */
    Arn?: Arn;
    /**
     * The date and time that the job was created, in ISO 8601 format.
     */
    CreatedAt?: Timestamp;
    /**
     * Details about the job.
     */
    Details?: ResponseDetails;
    /**
     * The errors associated with jobs.
     */
    Errors?: ListOfJobError;
    /**
     * The unique identifier for the job.
     */
    Id?: Id;
    /**
     * The state of the job.
     */
    State?: State;
    /**
     * The job type.
     */
    Type?: Type;
    /**
     * The date and time that the job was last updated, in ISO 8601 format.
     */
    UpdatedAt?: Timestamp;
  }
  export interface CreateRevisionRequest {
    /**
     * An optional comment about the revision.
     */
    Comment?: __stringMin0Max16384;
    /**
     * The unique identifier for a data set.
     */
    DataSetId: __string;
    /**
     * A revision tag is an optional label that you can assign to a revision when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.
     */
    Tags?: MapOf__string;
  }
  export interface CreateRevisionResponse {
    /**
     * The ARN for the revision.
     */
    Arn?: Arn;
    /**
     * An optional comment about the revision.
     */
    Comment?: __stringMin0Max16384;
    /**
     * The date and time that the revision was created, in ISO 8601 format.
     */
    CreatedAt?: Timestamp;
    /**
     * The unique identifier for the data set associated with the data set revision.
     */
    DataSetId?: Id;
    /**
     * To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.
     */
    Finalized?: __boolean;
    /**
     * The unique identifier for the revision.
     */
    Id?: Id;
    /**
     * The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.
     */
    SourceId?: Id;
    /**
     * The tags for the revision.
     */
    Tags?: MapOf__string;
    /**
     * The date and time that the revision was last updated, in ISO 8601 format.
     */
    UpdatedAt?: Timestamp;
    /**
     * A required comment to inform subscribers of the reason their access to the revision was revoked.
     */
    RevocationComment?: __stringMin10Max512;
    /**
     * A status indicating that subscribers' access to the revision was revoked.
     */
    Revoked?: __boolean;
    /**
     * The date and time that the revision was revoked, in ISO 8601 format.
     */
    RevokedAt?: Timestamp;
  }
  export interface CreateS3DataAccessFromS3BucketRequestDetails {
    /**
     * Details about the S3 data access source asset.
     */
    AssetSource: S3DataAccessAssetSourceEntry;
    /**
     * The unique identifier for the data set associated with the creation of this Amazon S3 data access.
     */
    DataSetId: Id;
    /**
     * The unique identifier for a revision.
     */
    RevisionId: Id;
  }
  export interface CreateS3DataAccessFromS3BucketResponseDetails {
    /**
     * Details about the asset source from an Amazon S3 bucket.
     */
    AssetSource: S3DataAccessAssetSourceEntry;
    /**
     * The unique identifier for this data set.
     */
    DataSetId: Id;
    /**
     * The unique identifier for the revision.
     */
    RevisionId: Id;
  }
  export interface DataSetEntry {
    /**
     * The ARN for the data set.
     */
    Arn: Arn;
    /**
     * The type of asset that is added to a data set.
     */
    AssetType: AssetType;
    /**
     * The date and time that the data set was created, in ISO 8601 format.
     */
    CreatedAt: Timestamp;
    /**
     * The description for the data set.
     */
    Description: Description;
    /**
     * The unique identifier for the data set.
     */
    Id: Id;
    /**
     * The name of the data set.
     */
    Name: Name;
    /**
     * A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).
     */
    Origin: Origin;
    /**
     * If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.
     */
    OriginDetails?: OriginDetails;
    /**
     * The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.
     */
    SourceId?: Id;
    /**
     * The date and time that the data set was last updated, in ISO 8601 format.
     */
    UpdatedAt: Timestamp;
  }
  export interface DataUpdateRequestDetails {
    /**
     * A datetime in the past when the data was updated. This typically means that the underlying resource supporting the data set was updated.
     */
    DataUpdatedAt?: Timestamp;
  }
  export interface DatabaseLFTagPolicy {
    /**
     * A list of LF-tag conditions that apply to database resources.
     */
    Expression: ListOfLFTags;
  }
  export interface DatabaseLFTagPolicyAndPermissions {
    /**
     * A list of LF-tag conditions that apply to database resources.
     */
    Expression: ListOfLFTags;
    /**
     * The permissions granted to subscribers on database resources.
     */
    Permissions: ListOfDatabaseLFTagPolicyPermissions;
  }
  export type DatabaseLFTagPolicyPermission = "DESCRIBE"|string;
  export interface DeleteAssetRequest {
    /**
     * The unique identifier for an asset.
     */
    AssetId: __string;
    /**
     * The unique identifier for a data set.
     */
    DataSetId: __string;
    /**
     * The unique identifier for a revision.
     */
    RevisionId: __string;
  }
  export interface DeleteDataSetRequest {
    /**
     * The unique identifier for a data set.
     */
    DataSetId: __string;
  }
  export interface DeleteEventActionRequest {
    /**
     * The unique identifier for the event action.
     */
    EventActionId: __string;
  }
  export interface DeleteRevisionRequest {
    /**
     * The unique identifier for a data set.
     */
    DataSetId: __string;
    /**
     * The unique identifier for a revision.
     */
    RevisionId: __string;
  }
  export interface DeprecationRequestDetails {
    /**
     * A datetime in the future when the data set will be deprecated.
     */
    DeprecationAt: Timestamp;
  }
  export type Description = string;
  export interface Details {
    /**
     * Information about the job error.
     */
    ImportAssetFromSignedUrlJobErrorDetails?: ImportAssetFromSignedUrlJobErrorDetails;
    /**
     * Details about the job error.
     */
    ImportAssetsFromS3JobErrorDetails?: ListOfAssetSourceEntry;
  }
  export interface Event {
    /**
     * What occurs to start the revision publish action.
     */
    RevisionPublished?: RevisionPublished;
  }
  export interface EventActionEntry {
    /**
     * What occurs after a certain event.
     */
    Action: Action;
    /**
     * The Amazon Resource Name (ARN) for the event action.
     */
    Arn: Arn;
    /**
     * The date and time that the event action was created, in ISO 8601 format.
     */
    CreatedAt: Timestamp;
    /**
     * What occurs to start an action.
     */
    Event: Event;
    /**
     * The unique identifier for the event action.
     */
    Id: Id;
    /**
     * The date and time that the event action was last updated, in ISO 8601 format.
     */
    UpdatedAt: Timestamp;
  }
  export interface ExportAssetToSignedUrlRequestDetails {
    /**
     * The unique identifier for the asset that is exported to a signed URL.
     */
    AssetId: Id;
    /**
     * The unique identifier for the data set associated with this export job.
     */
    DataSetId: Id;
    /**
     * The unique identifier for the revision associated with this export request.
     */
    RevisionId: Id;
  }
  export interface ExportAssetToSignedUrlResponseDetails {
    /**
     * The unique identifier for the asset associated with this export job.
     */
    AssetId: Id;
    /**
     * The unique identifier for the data set associated with this export job.
     */
    DataSetId: Id;
    /**
     * The unique identifier for the revision associated with this export response.
     */
    RevisionId: Id;
    /**
     * The signed URL for the export request.
     */
    SignedUrl?: __string;
    /**
     * The date and time that the signed URL expires, in ISO 8601 format.
     */
    SignedUrlExpiresAt?: Timestamp;
  }
  export interface ExportAssetsToS3RequestDetails {
    /**
     * The destination for the asset.
     */
    AssetDestinations: ListOfAssetDestinationEntry;
    /**
     * The unique identifier for the data set associated with this export job.
     */
    DataSetId: Id;
    /**
     * Encryption configuration for the export job.
     */
    Encryption?: ExportServerSideEncryption;
    /**
     * The unique identifier for the revision associated with this export request.
     */
    RevisionId: Id;
  }
  export interface ExportAssetsToS3ResponseDetails {
    /**
     * The destination in Amazon S3 where the asset is exported.
     */
    AssetDestinations: ListOfAssetDestinationEntry;
    /**
     * The unique identifier for the data set associated with this export job.
     */
    DataSetId: Id;
    /**
     * Encryption configuration of the export job.
     */
    Encryption?: ExportServerSideEncryption;
    /**
     * The unique identifier for the revision associated with this export response.
     */
    RevisionId: Id;
  }
  export interface ExportRevisionsToS3RequestDetails {
    /**
     * The unique identifier for the data set associated with this export job.
     */
    DataSetId: Id;
    /**
     * Encryption configuration for the export job.
     */
    Encryption?: ExportServerSideEncryption;
    /**
     * The destination for the revision.
     */
    RevisionDestinations: ListOfRevisionDestinationEntry;
  }
  export interface ExportRevisionsToS3ResponseDetails {
    /**
     * The unique identifier for the data set associated with this export job.
     */
    DataSetId: Id;
    /**
     * Encryption configuration of the export job.
     */
    Encryption?: ExportServerSideEncryption;
    /**
     * The destination in Amazon S3 where the revision is exported.
     */
    RevisionDestinations: ListOfRevisionDestinationEntry;
    /**
     * The Amazon Resource Name (ARN) of the event action.
     */
    EventActionArn?: __string;
  }
  export interface ExportServerSideEncryption {
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects. This parameter is required if you choose aws:kms as an encryption type.
     */
    KmsKeyArn?: __string;
    /**
     * The type of server side encryption used for encrypting the objects in Amazon S3.
     */
    Type: ServerSideEncryptionTypes;
  }
  export interface GetAssetRequest {
    /**
     * The unique identifier for an asset.
     */
    AssetId: __string;
    /**
     * The unique identifier for a data set.
     */
    DataSetId: __string;
    /**
     * The unique identifier for a revision.
     */
    RevisionId: __string;
  }
  export interface GetAssetResponse {
    /**
     * The ARN for the asset.
     */
    Arn?: Arn;
    /**
     * Details about the asset.
     */
    AssetDetails?: AssetDetails;
    /**
     * The type of asset that is added to a data set.
     */
    AssetType?: AssetType;
    /**
     * The date and time that the asset was created, in ISO 8601 format.
     */
    CreatedAt?: Timestamp;
    /**
     * The unique identifier for the data set associated with this asset.
     */
    DataSetId?: Id;
    /**
     * The unique identifier for the asset.
     */
    Id?: Id;
    /**
     * The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in the LF-tag policy" or "Table(s) included in the LF-tag policy" are used as the asset name.
     */
    Name?: AssetName;
    /**
     * The unique identifier for the revision associated with this asset.
     */
    RevisionId?: Id;
    /**
     * The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.
     */
    SourceId?: Id;
    /**
     * The date and time that the asset was last updated, in ISO 8601 format.
     */
    UpdatedAt?: Timestamp;
  }
  export interface GetDataSetRequest {
    /**
     * The unique identifier for a data set.
     */
    DataSetId: __string;
  }
  export interface GetDataSetResponse {
    /**
     * The ARN for the data set.
     */
    Arn?: Arn;
    /**
     * The type of asset that is added to a data set.
     */
    AssetType?: AssetType;
    /**
     * The date and time that the data set was created, in ISO 8601 format.
     */
    CreatedAt?: Timestamp;
    /**
     * The description for the data set.
     */
    Description?: Description;
    /**
     * The unique identifier for the data set.
     */
    Id?: Id;
    /**
     * The name of the data set.
     */
    Name?: Name;
    /**
     * A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).
     */
    Origin?: Origin;
    /**
     * If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.
     */
    OriginDetails?: OriginDetails;
    /**
     * The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.
     */
    SourceId?: Id;
    /**
     * The tags for the data set.
     */
    Tags?: MapOf__string;
    /**
     * The date and time that the data set was last updated, in ISO 8601 format.
     */
    UpdatedAt?: Timestamp;
  }
  export interface GetEventActionRequest {
    /**
     * The unique identifier for the event action.
     */
    EventActionId: __string;
  }
  export interface GetEventActionResponse {
    /**
     * What occurs after a certain event.
     */
    Action?: Action;
    /**
     * The ARN for the event action.
     */
    Arn?: Arn;
    /**
     * The date and time that the event action was created, in ISO 8601 format.
     */
    CreatedAt?: Timestamp;
    /**
     * What occurs to start an action.
     */
    Event?: Event;
    /**
     * The unique identifier for the event action.
     */
    Id?: Id;
    /**
     * The date and time that the event action was last updated, in ISO 8601 format.
     */
    UpdatedAt?: Timestamp;
  }
  export interface GetJobRequest {
    /**
     * The unique identifier for a job.
     */
    JobId: __string;
  }
  export interface GetJobResponse {
    /**
     * The ARN for the job.
     */
    Arn?: Arn;
    /**
     * The date and time that the job was created, in ISO 8601 format.
     */
    CreatedAt?: Timestamp;
    /**
     * Details about the job.
     */
    Details?: ResponseDetails;
    /**
     * The errors associated with jobs.
     */
    Errors?: ListOfJobError;
    /**
     * The unique identifier for the job.
     */
    Id?: Id;
    /**
     * The state of the job.
     */
    State?: State;
    /**
     * The job type.
     */
    Type?: Type;
    /**
     * The date and time that the job was last updated, in ISO 8601 format.
     */
    UpdatedAt?: Timestamp;
  }
  export interface GetRevisionRequest {
    /**
     * The unique identifier for a data set.
     */
    DataSetId: __string;
    /**
     * The unique identifier for a revision.
     */
    RevisionId: __string;
  }
  export interface GetRevisionResponse {
    /**
     * The ARN for the revision.
     */
    Arn?: Arn;
    /**
     * An optional comment about the revision.
     */
    Comment?: __stringMin0Max16384;
    /**
     * The date and time that the revision was created, in ISO 8601 format.
     */
    CreatedAt?: Timestamp;
    /**
     * The unique identifier for the data set associated with the data set revision.
     */
    DataSetId?: Id;
    /**
     * To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.
     */
    Finalized?: __boolean;
    /**
     * The unique identifier for the revision.
     */
    Id?: Id;
    /**
     * The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.
     */
    SourceId?: Id;
    /**
     * The tags for the revision.
     */
    Tags?: MapOf__string;
    /**
     * The date and time that the revision was last updated, in ISO 8601 format.
     */
    UpdatedAt?: Timestamp;
    /**
     * A required comment to inform subscribers of the reason their access to the revision was revoked.
     */
    RevocationComment?: __stringMin10Max512;
    /**
     * A status indicating that subscribers' access to the revision was revoked.
     */
    Revoked?: __boolean;
    /**
     * The date and time that the revision was revoked, in ISO 8601 format.
     */
    RevokedAt?: Timestamp;
  }
  export type Id = string;
  export interface ImportAssetFromApiGatewayApiRequestDetails {
    /**
     * The API description. Markdown supported.
     */
    ApiDescription?: ApiDescription;
    /**
     * The API Gateway API ID.
     */
    ApiId: __string;
    /**
     * The API Gateway API key.
     */
    ApiKey?: __string;
    /**
     * The API name.
     */
    ApiName: __string;
    /**
     * The Base64-encoded MD5 hash of the OpenAPI 3.0 JSON API specification file. It is used to ensure the integrity of the file.
     */
    ApiSpecificationMd5Hash: __stringMin24Max24PatternAZaZ094AZaZ092AZaZ093;
    /**
     * The data set ID.
     */
    DataSetId: Id;
    /**
     * The protocol type.
     */
    ProtocolType: ProtocolType;
    /**
     * The revision ID.
     */
    RevisionId: Id;
    /**
     * The API stage.
     */
    Stage: __string;
  }
  export interface ImportAssetFromApiGatewayApiResponseDetails {
    /**
     * The API description.
     */
    ApiDescription?: ApiDescription;
    /**
     * The API ID.
     */
    ApiId: __string;
    /**
     * The API key.
     */
    ApiKey?: __string;
    /**
     * The API name.
     */
    ApiName: __string;
    /**
     * The Base64-encoded Md5 hash for the API asset, used to ensure the integrity of the API at that location.
     */
    ApiSpecificationMd5Hash: __stringMin24Max24PatternAZaZ094AZaZ092AZaZ093;
    /**
     * The upload URL of the API specification.
     */
    ApiSpecificationUploadUrl: __string;
    /**
     * The date and time that the upload URL expires, in ISO 8601 format.
     */
    ApiSpecificationUploadUrlExpiresAt: Timestamp;
    /**
     * The data set ID.
     */
    DataSetId: Id;
    /**
     * The protocol type.
     */
    ProtocolType: ProtocolType;
    /**
     * The revision ID.
     */
    RevisionId: Id;
    /**
     * The API stage.
     */
    Stage: __string;
  }
  export interface ImportAssetFromSignedUrlJobErrorDetails {
    /**
     * Details about the job error.
     */
    AssetName: AssetName;
  }
  export interface ImportAssetFromSignedUrlRequestDetails {
    /**
     * The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name.
     */
    AssetName: AssetName;
    /**
     * The unique identifier for the data set associated with this import job.
     */
    DataSetId: Id;
    /**
     * The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at that location.
     */
    Md5Hash: __stringMin24Max24PatternAZaZ094AZaZ092AZaZ093;
    /**
     * The unique identifier for the revision associated with this import request.
     */
    RevisionId: Id;
  }
  export interface ImportAssetFromSignedUrlResponseDetails {
    /**
     * The name for the asset associated with this import job.
     */
    AssetName: AssetName;
    /**
     * The unique identifier for the data set associated with this import job.
     */
    DataSetId: Id;
    /**
     * The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at that location.
     */
    Md5Hash?: __stringMin24Max24PatternAZaZ094AZaZ092AZaZ093;
    /**
     * The unique identifier for the revision associated with this import response.
     */
    RevisionId: Id;
    /**
     * The signed URL.
     */
    SignedUrl?: __string;
    /**
     * The time and date at which the signed URL expires, in ISO 8601 format.
     */
    SignedUrlExpiresAt?: Timestamp;
  }
  export interface ImportAssetsFromLakeFormationTagPolicyRequestDetails {
    /**
     * The identifier for the AWS Glue Data Catalog.
     */
    CatalogId: AwsAccountId;
    /**
     * A structure for the database object.
     */
    Database?: DatabaseLFTagPolicyAndPermissions;
    /**
     * A structure for the table object.
     */
    Table?: TableLFTagPolicyAndPermissions;
    /**
     * The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions of subscribers to AWS Lake Formation data permissions.
     */
    RoleArn: RoleArn;
    /**
     * The unique identifier for the data set associated with this import job.
     */
    DataSetId: Id;
    /**
     * The unique identifier for the revision associated with this import job.
     */
    RevisionId: Id;
  }
  export interface ImportAssetsFromLakeFormationTagPolicyResponseDetails {
    /**
     * The identifier for the AWS Glue Data Catalog.
     */
    CatalogId: AwsAccountId;
    /**
     * A structure for the database object.
     */
    Database?: DatabaseLFTagPolicyAndPermissions;
    /**
     * A structure for the table object.
     */
    Table?: TableLFTagPolicyAndPermissions;
    /**
     * The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions to AWS Lake Formation data permissions.
     */
    RoleArn: RoleArn;
    /**
     * The unique identifier for the data set associated with this import job.
     */
    DataSetId: Id;
    /**
     * The unique identifier for the revision associated with this import job.
     */
    RevisionId: Id;
  }
  export interface ImportAssetsFromRedshiftDataSharesRequestDetails {
    /**
     * A list of Amazon Redshift datashare assets.
     */
    AssetSources: ListOfRedshiftDataShareAssetSourceEntry;
    /**
     * The unique identifier for the data set associated with this import job.
     */
    DataSetId: Id;
    /**
     * The unique identifier for the revision associated with this import job.
     */
    RevisionId: Id;
  }
  export interface ImportAssetsFromRedshiftDataSharesResponseDetails {
    /**
     * A list of Amazon Redshift datashare asset sources.
     */
    AssetSources: ListOfRedshiftDataShareAssetSourceEntry;
    /**
     * The unique identifier for the data set associated with this import job.
     */
    DataSetId: Id;
    /**
     * The unique identifier for the revision associated with this import job.
     */
    RevisionId: Id;
  }
  export interface ImportAssetsFromS3RequestDetails {
    /**
     * Is a list of Amazon S3 bucket and object key pairs.
     */
    AssetSources: ListOfAssetSourceEntry;
    /**
     * The unique identifier for the data set associated with this import job.
     */
    DataSetId: Id;
    /**
     * The unique identifier for the revision associated with this import request.
     */
    RevisionId: Id;
  }
  export interface ImportAssetsFromS3ResponseDetails {
    /**
     * Is a list of Amazon S3 bucket and object key pairs.
     */
    AssetSources: ListOfAssetSourceEntry;
    /**
     * The unique identifier for the data set associated with this import job.
     */
    DataSetId: Id;
    /**
     * The unique identifier for the revision associated with this import response.
     */
    RevisionId: Id;
  }
  export interface JobEntry {
    /**
     * The ARN for the job.
     */
    Arn: Arn;
    /**
     * The date and time that the job was created, in ISO 8601 format.
     */
    CreatedAt: Timestamp;
    /**
     * Details of the operation to be performed by the job, such as export destination details or import source details.
     */
    Details: ResponseDetails;
    /**
     * Errors for jobs.
     */
    Errors?: ListOfJobError;
    /**
     * The unique identifier for the job.
     */
    Id: Id;
    /**
     * The state of the job.
     */
    State: State;
    /**
     * The job type.
     */
    Type: Type;
    /**
     * The date and time that the job was last updated, in ISO 8601 format.
     */
    UpdatedAt: Timestamp;
  }
  export interface JobError {
    /**
     * The code for the job error.
     */
    Code: Code;
    /**
     * The details about the job error.
     */
    Details?: Details;
    /**
     * The name of the limit that was reached.
     */
    LimitName?: JobErrorLimitName;
    /**
     * The value of the exceeded limit.
     */
    LimitValue?: __double;
    /**
     * The message related to the job error.
     */
    Message: __string;
    /**
     * The unique identifier for the resource related to the error.
     */
    ResourceId?: __string;
    /**
     * The type of resource related to the error.
     */
    ResourceType?: JobErrorResourceTypes;
  }
  export type JobErrorLimitName = "Assets per revision"|"Asset size in GB"|"Amazon Redshift datashare assets per revision"|"AWS Lake Formation data permission assets per revision"|"Amazon S3 data access assets per revision"|string;
  export type JobErrorResourceTypes = "REVISION"|"ASSET"|"DATA_SET"|string;
  export type KmsKeyArn = string;
  export interface KmsKeyToGrant {
    /**
     * The AWS KMS CMK (Key Management System Customer Managed Key) used to encrypt S3 objects in the shared S3 Bucket. AWS Data exchange will create a KMS grant for each subscriber to allow them to access and decrypt their entitled data that is encrypted using this KMS key specified.
     */
    KmsKeyArn: KmsKeyArn;
  }
  export type LFPermission = "DESCRIBE"|"SELECT"|string;
  export interface LFResourceDetails {
    /**
     * Details about the database resource included in the AWS Lake Formation data permission.
     */
    Database?: DatabaseLFTagPolicy;
    /**
     * Details about the table resource included in the AWS Lake Formation data permission.
     */
    Table?: TableLFTagPolicy;
  }
  export type LFResourceType = "TABLE"|"DATABASE"|string;
  export interface LFTag {
    /**
     * The key name for the LF-tag.
     */
    TagKey: String;
    /**
     * A list of LF-tag values.
     */
    TagValues: ListOfLFTagValues;
  }
  export interface LFTagPolicyDetails {
    /**
     * The identifier for the AWS Glue Data Catalog.
     */
    CatalogId: AwsAccountId;
    /**
     * The resource type for which the LF-tag policy applies.
     */
    ResourceType: LFResourceType;
    /**
     * Details for the Lake Formation Resources included in the LF-tag policy.
     */
    ResourceDetails: LFResourceDetails;
  }
  export interface LakeFormationDataPermissionAsset {
    /**
     * Details about the AWS Lake Formation data permission.
     */
    LakeFormationDataPermissionDetails: LakeFormationDataPermissionDetails;
    /**
     * The data permission type.
     */
    LakeFormationDataPermissionType: LakeFormationDataPermissionType;
    /**
     * The permissions granted to the subscribers on the resource.
     */
    Permissions: ListOfLFPermissions;
    /**
     * The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions to AWS Lake Formation data permissions.
     */
    RoleArn?: RoleArn;
  }
  export interface LakeFormationDataPermissionDetails {
    /**
     * Details about the LF-tag policy.
     */
    LFTagPolicy?: LFTagPolicyDetails;
  }
  export type LakeFormationDataPermissionType = "LFTagPolicy"|string;
  export interface LakeFormationTagPolicyDetails {
    /**
     * The underlying Glue database that the notification is referring to.
     */
    Database?: __string;
    /**
     * The underlying Glue table that the notification is referring to.
     */
    Table?: __string;
  }
  export interface ListDataSetRevisionsRequest {
    /**
     * The unique identifier for a data set.
     */
    DataSetId: __string;
    /**
     * The maximum number of results returned by a single call.
     */
    MaxResults?: MaxResults;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    NextToken?: __string;
  }
  export interface ListDataSetRevisionsResponse {
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    NextToken?: NextToken;
    /**
     * The asset objects listed by the request.
     */
    Revisions?: ListOfRevisionEntry;
  }
  export interface ListDataSetsRequest {
    /**
     * The maximum number of results returned by a single call.
     */
    MaxResults?: MaxResults;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    NextToken?: __string;
    /**
     * A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).
     */
    Origin?: __string;
  }
  export interface ListDataSetsResponse {
    /**
     * The data set objects listed by the request.
     */
    DataSets?: ListOfDataSetEntry;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    NextToken?: NextToken;
  }
  export interface ListEventActionsRequest {
    /**
     * The unique identifier for the event source.
     */
    EventSourceId?: __string;
    /**
     * The maximum number of results returned by a single call.
     */
    MaxResults?: MaxResults;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    NextToken?: __string;
  }
  export interface ListEventActionsResponse {
    /**
     * The event action objects listed by the request.
     */
    EventActions?: ListOfEventActionEntry;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    NextToken?: NextToken;
  }
  export interface ListJobsRequest {
    /**
     * The unique identifier for a data set.
     */
    DataSetId?: __string;
    /**
     * The maximum number of results returned by a single call.
     */
    MaxResults?: MaxResults;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    NextToken?: __string;
    /**
     * The unique identifier for a revision.
     */
    RevisionId?: __string;
  }
  export interface ListJobsResponse {
    /**
     * The jobs listed by the request.
     */
    Jobs?: ListOfJobEntry;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    NextToken?: NextToken;
  }
  export type ListOfAssetDestinationEntry = AssetDestinationEntry[];
  export type ListOfAssetEntry = AssetEntry[];
  export type ListOfAssetSourceEntry = AssetSourceEntry[];
  export type ListOfDataSetEntry = DataSetEntry[];
  export type ListOfDatabaseLFTagPolicyPermissions = DatabaseLFTagPolicyPermission[];
  export type ListOfEventActionEntry = EventActionEntry[];
  export type ListOfJobEntry = JobEntry[];
  export type ListOfJobError = JobError[];
  export type ListOfKmsKeysToGrant = KmsKeyToGrant[];
  export type ListOfLFPermissions = LFPermission[];
  export type ListOfLFTagValues = String[];
  export type ListOfLFTags = LFTag[];
  export type ListOfLakeFormationTagPolicies = LakeFormationTagPolicyDetails[];
  export type ListOfRedshiftDataShareAssetSourceEntry = RedshiftDataShareAssetSourceEntry[];
  export type ListOfRedshiftDataShares = RedshiftDataShareDetails[];
  export type ListOfRevisionDestinationEntry = RevisionDestinationEntry[];
  export type ListOfRevisionEntry = RevisionEntry[];
  export type ListOfS3DataAccesses = S3DataAccessDetails[];
  export type ListOfSchemaChangeDetails = SchemaChangeDetails[];
  export type ListOfTableTagPolicyLFPermissions = TableTagPolicyLFPermission[];
  export type ListOf__string = __string[];
  export interface ListRevisionAssetsRequest {
    /**
     * The unique identifier for a data set.
     */
    DataSetId: __string;
    /**
     * The maximum number of results returned by a single call.
     */
    MaxResults?: MaxResults;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    NextToken?: __string;
    /**
     * The unique identifier for a revision.
     */
    RevisionId: __string;
  }
  export interface ListRevisionAssetsResponse {
    /**
     * The asset objects listed by the request.
     */
    Assets?: ListOfAssetEntry;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
     */
    ResourceArn: __string;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A label that consists of a customer-defined key and an optional value.
     */
    Tags?: MapOf__string;
  }
  export type MapOf__string = {[key: string]: __string};
  export type MaxResults = number;
  export type Name = string;
  export type NextToken = string;
  export interface NotificationDetails {
    /**
     * Extra details specific to a data update type notification.
     */
    DataUpdate?: DataUpdateRequestDetails;
    /**
     * Extra details specific to a deprecation type notification.
     */
    Deprecation?: DeprecationRequestDetails;
    /**
     * Extra details specific to a schema change type notification.
     */
    SchemaChange?: SchemaChangeRequestDetails;
  }
  export type NotificationType = "DATA_DELAY"|"DATA_UPDATE"|"DEPRECATION"|"SCHEMA_CHANGE"|string;
  export type Origin = "OWNED"|"ENTITLED"|string;
  export interface OriginDetails {
    /**
     * The product ID of the origin of the data set.
     */
    ProductId?: __string;
  }
  export type ProtocolType = "REST"|string;
  export interface RedshiftDataShareAsset {
    /**
     * The Amazon Resource Name (ARN) of the datashare asset.
     */
    Arn: __string;
  }
  export interface RedshiftDataShareAssetSourceEntry {
    /**
     * The Amazon Resource Name (ARN) of the datashare asset.
     */
    DataShareArn: __string;
  }
  export interface RedshiftDataShareDetails {
    /**
     * The ARN of the underlying Redshift data share that is being affected by this notification.
     */
    Arn: __string;
    /**
     * The database name in the Redshift data share that is being affected by this notification.
     */
    Database: __string;
    /**
     * A function name in the Redshift database that is being affected by this notification.
     */
    Function?: __string;
    /**
     * A table name in the Redshift database that is being affected by this notification.
     */
    Table?: __string;
    /**
     * A schema name in the Redshift database that is being affected by this notification.
     */
    Schema?: __string;
    /**
     * A view name in the Redshift database that is being affected by this notification.
     */
    View?: __string;
  }
  export interface RequestDetails {
    /**
     * Details about the export to signed URL request.
     */
    ExportAssetToSignedUrl?: ExportAssetToSignedUrlRequestDetails;
    /**
     * Details about the export to Amazon S3 request.
     */
    ExportAssetsToS3?: ExportAssetsToS3RequestDetails;
    /**
     * Details about the export to Amazon S3 request.
     */
    ExportRevisionsToS3?: ExportRevisionsToS3RequestDetails;
    /**
     * Details about the import from Amazon S3 request.
     */
    ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlRequestDetails;
    /**
     * Details about the import asset from API Gateway API request.
     */
    ImportAssetsFromS3?: ImportAssetsFromS3RequestDetails;
    /**
     * Details from an import from Amazon Redshift datashare request.
     */
    ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesRequestDetails;
    /**
     * Details about the import from signed URL request.
     */
    ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiRequestDetails;
    /**
     * Details of the request to create S3 data access from the Amazon S3 bucket.
     */
    CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketRequestDetails;
    /**
     * Request details for the ImportAssetsFromLakeFormationTagPolicy job.
     */
    ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyRequestDetails;
  }
  export interface ResponseDetails {
    /**
     * Details for the export to signed URL response.
     */
    ExportAssetToSignedUrl?: ExportAssetToSignedUrlResponseDetails;
    /**
     * Details for the export to Amazon S3 response.
     */
    ExportAssetsToS3?: ExportAssetsToS3ResponseDetails;
    /**
     * Details for the export revisions to Amazon S3 response.
     */
    ExportRevisionsToS3?: ExportRevisionsToS3ResponseDetails;
    /**
     * Details for the import from signed URL response.
     */
    ImportAssetFromSignedUrl?: ImportAssetFromSignedUrlResponseDetails;
    /**
     * Details for the import from Amazon S3 response.
     */
    ImportAssetsFromS3?: ImportAssetsFromS3ResponseDetails;
    /**
     * Details from an import from Amazon Redshift datashare response.
     */
    ImportAssetsFromRedshiftDataShares?: ImportAssetsFromRedshiftDataSharesResponseDetails;
    /**
     * The response details.
     */
    ImportAssetFromApiGatewayApi?: ImportAssetFromApiGatewayApiResponseDetails;
    /**
     * Response details from the CreateS3DataAccessFromS3Bucket job.
     */
    CreateS3DataAccessFromS3Bucket?: CreateS3DataAccessFromS3BucketResponseDetails;
    /**
     * Response details from the ImportAssetsFromLakeFormationTagPolicy job.
     */
    ImportAssetsFromLakeFormationTagPolicy?: ImportAssetsFromLakeFormationTagPolicyResponseDetails;
  }
  export interface RevisionDestinationEntry {
    /**
     * The Amazon S3 bucket that is the destination for the assets in the revision.
     */
    Bucket: __string;
    /**
     * A string representing the pattern for generated names of the individual assets in the revision. For more information about key patterns, see Key patterns when exporting revisions.
     */
    KeyPattern?: __string;
    /**
     * The unique identifier for the revision.
     */
    RevisionId: Id;
  }
  export interface RevisionEntry {
    /**
     * The ARN for the revision.
     */
    Arn: Arn;
    /**
     * An optional comment about the revision.
     */
    Comment?: __stringMin0Max16384;
    /**
     * The date and time that the revision was created, in ISO 8601 format.
     */
    CreatedAt: Timestamp;
    /**
     * The unique identifier for the data set associated with the data set revision.
     */
    DataSetId: Id;
    /**
     * To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.
     */
    Finalized?: __boolean;
    /**
     * The unique identifier for the revision.
     */
    Id: Id;
    /**
     * The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.
     */
    SourceId?: Id;
    /**
     * The date and time that the revision was last updated, in ISO 8601 format.
     */
    UpdatedAt: Timestamp;
    /**
     * A required comment to inform subscribers of the reason their access to the revision was revoked.
     */
    RevocationComment?: __stringMin10Max512;
    /**
     * A status indicating that subscribers' access to the revision was revoked.
     */
    Revoked?: __boolean;
    /**
     * The date and time that the revision was revoked, in ISO 8601 format.
     */
    RevokedAt?: Timestamp;
  }
  export interface RevisionPublished {
    /**
     * The data set ID of the published revision.
     */
    DataSetId: Id;
  }
  export interface RevokeRevisionRequest {
    /**
     * The unique identifier for a data set.
     */
    DataSetId: __string;
    /**
     * The unique identifier for a revision.
     */
    RevisionId: __string;
    /**
     * A required comment to inform subscribers of the reason their access to the revision was revoked.
     */
    RevocationComment: __stringMin10Max512;
  }
  export interface RevokeRevisionResponse {
    /**
     * The ARN for the revision.
     */
    Arn?: Arn;
    /**
     * An optional comment about the revision.
     */
    Comment?: __stringMin0Max16384;
    /**
     * The date and time that the revision was created, in ISO 8601 format.
     */
    CreatedAt?: Timestamp;
    /**
     * The unique identifier for the data set associated with the data set revision.
     */
    DataSetId?: Id;
    /**
     * To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.
     */
    Finalized?: __boolean;
    /**
     * The unique identifier for the revision.
     */
    Id?: Id;
    /**
     * The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.
     */
    SourceId?: Id;
    /**
     * The date and time that the revision was last updated, in ISO 8601 format.
     */
    UpdatedAt?: Timestamp;
    /**
     * A required comment to inform subscribers of the reason their access to the revision was revoked.
     */
    RevocationComment?: __stringMin10Max512;
    /**
     * A status indicating that subscribers' access to the revision was revoked.
     */
    Revoked?: __boolean;
    /**
     * The date and time that the revision was revoked, in ISO 8601 format.
     */
    RevokedAt?: Timestamp;
  }
  export type RoleArn = string;
  export interface S3DataAccessAsset {
    /**
     * The Amazon S3 bucket hosting data to be shared in the S3 data access.
     */
    Bucket: __string;
    /**
     * The Amazon S3 bucket used for hosting shared data in the Amazon S3 data access.
     */
    KeyPrefixes?: ListOf__string;
    /**
     * S3 keys made available using this asset.
     */
    Keys?: ListOf__string;
    /**
     * The automatically-generated bucket-style alias for your Amazon S3 Access Point. Customers can access their entitled data using the S3 Access Point alias.
     */
    S3AccessPointAlias?: __string;
    /**
     * The ARN for your Amazon S3 Access Point. Customers can also access their entitled data using the S3 Access Point ARN.
     */
    S3AccessPointArn?: __string;
    /**
     *  List of AWS KMS CMKs (Key Management System Customer Managed Keys) and ARNs used to encrypt S3 objects being shared in this S3 Data Access asset. Providers must include all AWS KMS keys used to encrypt these shared S3 objects.
     */
    KmsKeysToGrant?: ListOfKmsKeysToGrant;
  }
  export interface S3DataAccessAssetSourceEntry {
    /**
     * The Amazon S3 bucket used for hosting shared data in the Amazon S3 data access.
     */
    Bucket: __string;
    /**
     * Organizes Amazon S3 asset key prefixes stored in an Amazon S3 bucket.
     */
    KeyPrefixes?: ListOf__string;
    /**
     * The keys used to create the Amazon S3 data access.
     */
    Keys?: ListOf__string;
    /**
     * List of AWS KMS CMKs (Key Management System Customer Managed Keys) and ARNs used to encrypt S3 objects being shared in this S3 Data Access asset.
     */
    KmsKeysToGrant?: ListOfKmsKeysToGrant;
  }
  export interface S3DataAccessDetails {
    /**
     * A list of the key prefixes affected by this notification. This can have up to 50 entries.
     */
    KeyPrefixes?: ListOf__string;
    /**
     * A list of the keys affected by this notification. This can have up to 50 entries.
     */
    Keys?: ListOf__string;
  }
  export interface S3SnapshotAsset {
    /**
     * The size of the Amazon S3 object that is the object.
     */
    Size: __doubleMin0;
  }
  export interface SchemaChangeDetails {
    /**
     * Name of the changing field. This value can be up to 255 characters long.
     */
    Name: __string;
    /**
     * Is the field being added, removed, or modified?
     */
    Type: SchemaChangeType;
    /**
     * Description of what's changing about this field. This value can be up to 512 characters long.
     */
    Description?: __string;
  }
  export interface SchemaChangeRequestDetails {
    /**
     * List of schema changes happening in the scope of this notification. This can have up to 100 entries.
     */
    Changes?: ListOfSchemaChangeDetails;
    /**
     * A date in the future when the schema change is taking effect.
     */
    SchemaChangeAt: Timestamp;
  }
  export type SchemaChangeType = "ADD"|"REMOVE"|"MODIFY"|string;
  export interface ScopeDetails {
    /**
     * Underlying LF resources that will be affected by this notification.
     */
    LakeFormationTagPolicies?: ListOfLakeFormationTagPolicies;
    /**
     * Underlying Redshift resources that will be affected by this notification.
     */
    RedshiftDataShares?: ListOfRedshiftDataShares;
    /**
     * Underlying S3 resources that will be affected by this notification.
     */
    S3DataAccesses?: ListOfS3DataAccesses;
  }
  export interface SendApiAssetRequest {
    /**
     * The request body.
     */
    Body?: __string;
    /**
     * Attach query string parameters to the end of the URI (for example, /v1/examplePath?exampleParam=exampleValue).
     */
    QueryStringParameters?: MapOf__string;
    /**
     * Asset ID value for the API request.
     */
    AssetId: __string;
    /**
     * Data set ID value for the API request.
     */
    DataSetId: __string;
    /**
     * Any header value prefixed with x-amzn-dataexchange-header- will have that stripped before sending the Asset API request. Use this when you want to override a header that AWS Data Exchange uses. Alternatively, you can use the header without a prefix to the HTTP request.
     */
    RequestHeaders?: MapOf__string;
    /**
     * HTTP method value for the API request. Alternatively, you can use the appropriate verb in your request.
     */
    Method?: __string;
    /**
     * URI path value for the API request. Alternatively, you can set the URI path directly by invoking /v1/{pathValue}.
     */
    Path?: __string;
    /**
     * Revision ID value for the API request.
     */
    RevisionId: __string;
  }
  export interface SendApiAssetResponse {
    /**
     * The response body from the underlying API tracked by the API asset.
     */
    Body?: __string;
    /**
     * The response headers from the underlying API tracked by the API asset.
     */
    ResponseHeaders?: MapOf__string;
  }
  export interface SendDataSetNotificationRequest {
    /**
     * Affected scope of this notification such as the underlying resources affected by the notification event.
     */
    Scope?: ScopeDetails;
    /**
     * Idempotency key for the notification, this key allows us to deduplicate notifications that are sent in quick succession erroneously.
     */
    ClientToken?: ClientToken;
    /**
     * Free-form text field for providers to add information about their notifications.
     */
    Comment?: __stringMin0Max4096;
    /**
     * Affected data set of the notification.
     */
    DataSetId: __string;
    /**
     * Extra details specific to this notification type.
     */
    Details?: NotificationDetails;
    /**
     * The type of the notification. Describing the kind of event the notification is alerting you to.
     */
    Type: NotificationType;
  }
  export interface SendDataSetNotificationResponse {
  }
  export type ServerSideEncryptionTypes = "aws:kms"|"AES256"|string;
  export interface StartJobRequest {
    /**
     * The unique identifier for a job.
     */
    JobId: __string;
  }
  export interface StartJobResponse {
  }
  export type State = "WAITING"|"IN_PROGRESS"|"ERROR"|"COMPLETED"|"CANCELLED"|"TIMED_OUT"|string;
  export type String = string;
  export interface TableLFTagPolicy {
    /**
     * A list of LF-tag conditions that apply to table resources.
     */
    Expression: ListOfLFTags;
  }
  export interface TableLFTagPolicyAndPermissions {
    /**
     * A list of LF-tag conditions that apply to table resources.
     */
    Expression: ListOfLFTags;
    /**
     * The permissions granted to subscribers on table resources.
     */
    Permissions: ListOfTableTagPolicyLFPermissions;
  }
  export type TableTagPolicyLFPermission = "DESCRIBE"|"SELECT"|string;
  export interface TagResourceRequest {
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
     */
    ResourceArn: __string;
    /**
     * A label that consists of a customer-defined key and an optional value.
     */
    Tags: MapOf__string;
  }
  export type Timestamp = Date;
  export type Type = "IMPORT_ASSETS_FROM_S3"|"IMPORT_ASSET_FROM_SIGNED_URL"|"EXPORT_ASSETS_TO_S3"|"EXPORT_ASSET_TO_SIGNED_URL"|"EXPORT_REVISIONS_TO_S3"|"IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES"|"IMPORT_ASSET_FROM_API_GATEWAY_API"|"CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET"|"IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY"|string;
  export interface UntagResourceRequest {
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.
     */
    ResourceArn: __string;
    /**
     * The key tags.
     */
    TagKeys: ListOf__string;
  }
  export interface UpdateAssetRequest {
    /**
     * The unique identifier for an asset.
     */
    AssetId: __string;
    /**
     * The unique identifier for a data set.
     */
    DataSetId: __string;
    /**
     * The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in the LF-tag policy" or "Table(s) included in LF-tag policy" are used as the name.
     */
    Name: AssetName;
    /**
     * The unique identifier for a revision.
     */
    RevisionId: __string;
  }
  export interface UpdateAssetResponse {
    /**
     * The ARN for the asset.
     */
    Arn?: Arn;
    /**
     * Details about the asset.
     */
    AssetDetails?: AssetDetails;
    /**
     * The type of asset that is added to a data set.
     */
    AssetType?: AssetType;
    /**
     * The date and time that the asset was created, in ISO 8601 format.
     */
    CreatedAt?: Timestamp;
    /**
     * The unique identifier for the data set associated with this asset.
     */
    DataSetId?: Id;
    /**
     * The unique identifier for the asset.
     */
    Id?: Id;
    /**
     * The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in the LF-tag policy"- or "Table(s) included in LF-tag policy" are used as the asset name.
     */
    Name?: AssetName;
    /**
     * The unique identifier for the revision associated with this asset.
     */
    RevisionId?: Id;
    /**
     * The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.
     */
    SourceId?: Id;
    /**
     * The date and time that the asset was last updated, in ISO 8601 format.
     */
    UpdatedAt?: Timestamp;
  }
  export interface UpdateDataSetRequest {
    /**
     * The unique identifier for a data set.
     */
    DataSetId: __string;
    /**
     * The description for the data set.
     */
    Description?: Description;
    /**
     * The name of the data set.
     */
    Name?: Name;
  }
  export interface UpdateDataSetResponse {
    /**
     * The ARN for the data set.
     */
    Arn?: Arn;
    /**
     * The type of asset that is added to a data set.
     */
    AssetType?: AssetType;
    /**
     * The date and time that the data set was created, in ISO 8601 format.
     */
    CreatedAt?: Timestamp;
    /**
     * The description for the data set.
     */
    Description?: Description;
    /**
     * The unique identifier for the data set.
     */
    Id?: Id;
    /**
     * The name of the data set.
     */
    Name?: Name;
    /**
     * A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).
     */
    Origin?: Origin;
    /**
     * If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.
     */
    OriginDetails?: OriginDetails;
    /**
     * The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.
     */
    SourceId?: Id;
    /**
     * The date and time that the data set was last updated, in ISO 8601 format.
     */
    UpdatedAt?: Timestamp;
  }
  export interface UpdateEventActionRequest {
    /**
     * What occurs after a certain event.
     */
    Action?: Action;
    /**
     * The unique identifier for the event action.
     */
    EventActionId: __string;
  }
  export interface UpdateEventActionResponse {
    /**
     * What occurs after a certain event.
     */
    Action?: Action;
    /**
     * The ARN for the event action.
     */
    Arn?: Arn;
    /**
     * The date and time that the event action was created, in ISO 8601 format.
     */
    CreatedAt?: Timestamp;
    /**
     * What occurs to start an action.
     */
    Event?: Event;
    /**
     * The unique identifier for the event action.
     */
    Id?: Id;
    /**
     * The date and time that the event action was last updated, in ISO 8601 format.
     */
    UpdatedAt?: Timestamp;
  }
  export interface UpdateRevisionRequest {
    /**
     * An optional comment about the revision.
     */
    Comment?: __stringMin0Max16384;
    /**
     * The unique identifier for a data set.
     */
    DataSetId: __string;
    /**
     * Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.
     */
    Finalized?: __boolean;
    /**
     * The unique identifier for a revision.
     */
    RevisionId: __string;
  }
  export interface UpdateRevisionResponse {
    /**
     * The ARN for the revision.
     */
    Arn?: Arn;
    /**
     * An optional comment about the revision.
     */
    Comment?: __stringMin0Max16384;
    /**
     * The date and time that the revision was created, in ISO 8601 format.
     */
    CreatedAt?: Timestamp;
    /**
     * The unique identifier for the data set associated with the data set revision.
     */
    DataSetId?: Id;
    /**
     * To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.
     */
    Finalized?: __boolean;
    /**
     * The unique identifier for the revision.
     */
    Id?: Id;
    /**
     * The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.
     */
    SourceId?: Id;
    /**
     * The date and time that the revision was last updated, in ISO 8601 format.
     */
    UpdatedAt?: Timestamp;
    /**
     * A required comment to inform subscribers of the reason their access to the revision was revoked.
     */
    RevocationComment?: __stringMin10Max512;
    /**
     * A status indicating that subscribers' access to the revision was revoked.
     */
    Revoked?: __boolean;
    /**
     * The date and time that the revision was revoked, in ISO 8601 format.
     */
    RevokedAt?: Timestamp;
  }
  export type __boolean = boolean;
  export type __double = number;
  export type __doubleMin0 = number;
  export type __string = string;
  export type __stringMin0Max16384 = string;
  export type __stringMin0Max4096 = string;
  export type __stringMin10Max512 = string;
  export type __stringMin24Max24PatternAZaZ094AZaZ092AZaZ093 = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-07-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DataExchange client.
   */
  export import Types = DataExchange;
}
export = DataExchange;
